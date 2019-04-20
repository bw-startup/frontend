import React, { useState, useEffect, useContext } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import GlobalContext from '../../utils/context';
import {
  PREDICT_START,
  PREDICT_SUCCESS,
  PREDICT_FAILURE,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  LOGOUT_START,
  LOGOUT_SUCCESS
} from '../../utils/constants';
import { Route } from 'react-router-dom';
import Navigation from '../Navigation';
import Profile from '../Profile';
import PredictorInput from './PredictorInput';
import PredictorOutput from './PredictorOutput';
import * as S from '../../styles';

export default function Predictor(props) {
  const { state, dispatch } = useContext(GlobalContext);
  const [cookie, , removeCookie] = useCookies(['StartupTrajectoryPredictor']);
  const [cookieResults, setCookieResults] = useCookies(['PredictorResults']);
  const [, , removeHasPredictedCookie] = useCookies(['hasPredictedCookie']);
  const [updatedMessage, setUpdatedMessage] = useState('');
  const [currentUser, setCurrentUser] = useState({
    id: '',
    email: '',
    password: ''
  });
  const [inputs, setInputs] = useState({
    headquarters: '',
    numFounders: '',
    numFundingRounds: '',
    numArticles: '',
    numEmployees: '',
    industry: ''
  });

  useEffect(() => {
    axios
      .get('https://startups7.herokuapp.com/api/me', {
        headers: {
          Authorization: cookie['StartupTrajectoryPredictor']
        }
      })
      .then(response => {
        setCurrentUser(inputs => ({
          ...inputs,
          id: response.data.id,
          email: response.data.email
        }));
      })
      .catch(err => console.log(err));
  }, []);

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  const handleUpdatePasswordChange = event => {
    event.persist();
    setCurrentUser(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  const handlePredictorInputSubmit = event => {
    event.preventDefault();
    dispatch({ type: PREDICT_START });
    removeHasPredictedCookie('hasPredictedCookie', { path: '/' });
    axios
      .post(
        'https://startups7.herokuapp.com/api/predict',
        {
          ...inputs,
          numFounders: +inputs.numFounders,
          numFundingRounds: +inputs.numFundingRounds,
          numArticles: +inputs.numArticles,
          numEmployees: +inputs.numEmployees
        },
        {
          headers: {
            Authorization: cookie['StartupTrajectoryPredictor']
          }
        }
      )
      .then(response => {
        setTimeout(() => {
          if (cookieResults['PredictorResults']) {
            const newResults = [
              ...cookieResults['PredictorResults'],
              { ...inputs, prediction: response.data.prediction }
            ];
            setCookieResults('PredictorResults', newResults, {
              path: '/'
            });
          } else {
            setCookieResults(
              'PredictorResults',
              [{ ...inputs, prediction: response.data.prediction }],
              {
                path: '/'
              }
            );
          }
          dispatch({
            type: PREDICT_SUCCESS,
            payload: response.data.prediction
          });
          setInputs({
            headquarters: '',
            numFounders: '',
            numFundingRounds: '',
            numArticles: '',
            numEmployees: '',
            industry: ''
          });
          props.history.push('/predictor/results');
        }, 3000);
      })
      .catch(err => {
        dispatch({
          type: PREDICT_FAILURE,
          payload: err.response.data.message
        });
        console.log('error', err.response.data.message);
      });
  };

  const handleUpdatePasswordSubmit = event => {
    dispatch({ type: UPDATE_USER_START });
    event.preventDefault();
    axios
      .put('https://startups7.herokuapp.com/api/me', currentUser, {
        headers: {
          Authorization: cookie['StartupTrajectoryPredictor']
        }
      })
      .then(() => {
        setTimeout(() => {
          dispatch({ type: UPDATE_USER_SUCCESS });
          setUpdatedMessage('Password updated successfully!');
          setCurrentUser(inputs => ({
            ...inputs,
            password: ''
          }));
        }, 2000);
      })
      .catch(err => {
        dispatch({
          type: UPDATE_USER_FAILURE,
          payload: err.response.data.message
        });
        console.log(err.response.data.message);
      });
  };

  const handleLogOut = () => {
    dispatch({ type: LOGOUT_START });
    setTimeout(() => {
      dispatch({ type: LOGOUT_SUCCESS });
      removeCookie('StartupTrajectoryPredictor', { path: '/' });
      props.history.push('/');
    }, 2000);
  };

  const handleDeleteUser = () => {
    dispatch({ type: DELETE_USER_START });
    axios
      .delete('https://startups7.herokuapp.com/api/me', {
        headers: {
          Authorization: cookie['StartupTrajectoryPredictor']
        }
      })
      .then(() => {
        setTimeout(() => {
          dispatch({ type: DELETE_USER_SUCCESS });
          removeCookie('StartupTrajectoryPredictor', { path: '/' });
          props.history.push('/');
        }, 2000);
      })
      .catch(err => {
        dispatch({
          type: DELETE_USER_FAILURE,
          payload: err.response.data.message
        });
        console.log(err.response.data.message);
      });
  };

  return (
    <S.Predictor>
      <S.HtmlBackground />
      <S.BodyBackgroundHorizontal primary />
      <Navigation />
      <Route
        exact
        path='/predictor/myprofile'
        render={props => (
          <Profile
            {...props}
            currentUser={currentUser}
            handleLogOut={handleLogOut}
            handleUpdatePasswordChange={handleUpdatePasswordChange}
            handleUpdatePasswordSubmit={handleUpdatePasswordSubmit}
            updatedMessage={updatedMessage}
            handleDeleteUser={handleDeleteUser}
          />
        )}
      />
      <Route
        exact
        path='/predictor'
        render={props => (
          <PredictorInput
            {...props}
            handlePredictorInputSubmit={handlePredictorInputSubmit}
            handleInputChange={handleInputChange}
            inputs={inputs}
          />
        )}
      />
      <Route
        exact
        path='/predictor/results'
        render={() => (
          <PredictorOutput
            cookie={cookieResults['PredictorResults']}
            {...props}
            prediction={state.prediction}
            inputs={inputs}
          />
        )}
      />
    </S.Predictor>
  );
}
