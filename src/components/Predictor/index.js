import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Route } from 'react-router-dom';

import Navigation from '../Navigation';
import Members from '../Members';
import Profile from '../Profile';
import PredictorResultsRoute from '../PrivateRoutes/PredictorResultsRoute';
import PredictorInput from './PredictorInput';
import PredictorOutput from './PredictorOutput';

import axiosAuthentication from '../../utils/axiosAuthentication';

import * as S from '../../styles';

export default function Predictor(props) {
  const [cookie, setCookie, removeCookie] = useCookies([
    'StartupTrajectoryPredictor'
  ]);
  const [updatedMessage, setUpdatedMessage] = useState('');
  const [currentUser, setCurrentUser] = useState({
    id: '',
    email: '',
    password: ''
  });

  const handleUpdatePasswordSubmit = event => {
    event.preventDefault();
    console.log("handleupdatepassubmit - currentUser",currentUser);
    axiosAuthentication(cookie['StartupTrajectoryPredictor'])
      .put('https://startups7.herokuapp.com/api/me', currentUser)
      .then(response => {
        setUpdatedMessage('Password updated successfully!');
        setCurrentUser(inputs => ({
          ...inputs,
          password: ''
        }));
        console.log("handleupdaepasswordsubmit - response", response);
      })
      .catch(err => console.log(err.response.data.message));
  };

  const handleUpdatePasswordChange = event => {
    event.persist();
    setCurrentUser(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  const handleLogOut = event => {
    event.preventDefault();
    removeCookie(['StartupTrajectoryPredictor']);
    props.history.push('/');
  };

  const handleDeleteUser = () => {
    axiosAuthentication(cookie['StartupTrajectoryPredictor'])
      .delete('https://startups7.herokuapp.com/api/me', currentUser.id)
      .then(response => {
        removeCookie(['StartupTrajectoryPredictor']);
        console.log('delete user', response);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    axiosAuthentication(cookie['StartupTrajectoryPredictor'])
      .get('https://startups7.herokuapp.com/api/me')
      .then(response => {
        setCurrentUser(inputs => ({
          ...inputs,
          id: response.data.id,
          email: response.data.email
        }));
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <S.Predictor>
      <S.BodyBackgroundHorizontal primary />
      <Navigation />
      <Route exact path='/predictor/members' component={Members} />
      <Route
        exact
        path='/predictor/myprofile'
        render={props => (
          <Profile
            {...props}
            currentUser={currentUser}
            handleLogOut={handleLogOut}
            handleUpdatePasswordSubmit={handleUpdatePasswordSubmit}
            updatedMessage={updatedMessage}
            handleDeleteUser={handleDeleteUser}
          />
        )}
      />
      <Route exact path='/predictor' component={PredictorInput} />
      <PredictorResultsRoute
        exact
        path='/predictor/results'
        component={PredictorOutput}
      />
    </S.Predictor>
  );
}
