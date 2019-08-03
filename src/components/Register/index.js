import React, {useState, useContext, useEffect} from 'react';
import {useCookies} from 'react-cookie';
import axios from 'axios';
import GlobalContext from '../../utils/context';
import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
} from '../../utils/constants';
import Loader from '../shared/Loader';
import ErrorMessage from '../shared/ErrorMessage';
import FormFooterLink from '../shared/FormFooterLink';
import * as S from '../../styles';

export default function Register(props) {
  const {state, dispatch} = useContext(GlobalContext);
  const [cookie, setCookie] = useCookies(['StartupTrajectoryPredictor']);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (cookie['StartupTrajectoryPredictor']) {
      dispatch({type: LOGIN_START});
      setTimeout(() => {
        props.history.push('/predictor');
      }, 2000);
    }
  }, []);

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    dispatch({type: REGISTER_START});
    axios
      .post('https://startups7.herokuapp.com/api/auth/register', inputs)
      .then((response) => {
        dispatch({type: REGISTER_SUCCESS, payload: response.data.message});
        dispatch({type: LOGIN_START});
        return axios.post(
          'https://startups7.herokuapp.com/api/auth/login',
          inputs,
        );
      })
      .then((response) => {
        setTimeout(() => {
          dispatch({type: LOGIN_SUCCESS, payload: response.data.token});
          setCookie('StartupTrajectoryPredictor', response.data.token, {
            path: '/',
          });
          props.history.push('/predictor');
        }, 2000);
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_FAILURE,
          payload: err.response.data.message,
        });
      });
  };

  if (state.isRegistering) {
    return <Loader text='Registering...' />;
  } else if (state.isLoggingIn) {
    return <Loader text='Thank you for registering! Logging in...' />;
  } else {
    if (cookie['StartupTrajectoryPredictor']) {
      return <Loader text='Logging in...' />;
    } else {
      return (
        <S.Register>
          {console.log('render')}
          <S.BodyBackgroundVertical />
          <S.RegisterImage>
            <S.RegisterImageImg
              className='login__image--img'
              src='/images/investing-register.svg'
              alt='Investing'
            />
          </S.RegisterImage>
          <S.RegisterForm>
            <h2>Hello, Friend!</h2>
            <p>Join us and lets get started.</p>
            <form onSubmit={handleRegisterSubmit}>
              <S.RegisterField>
                <label htmlFor='email'>Email:</label>
                <input
                  required
                  type='email'
                  name='email'
                  onChange={handleInputChange}
                  value={inputs.email}
                />
              </S.RegisterField>

              <S.RegisterField>
                <label htmlFor='password'>Password:</label>
                <input
                  required
                  type='password'
                  name='password'
                  onChange={handleInputChange}
                  value={inputs.password}
                />
              </S.RegisterField>
              {state.errorMessage && (
                <ErrorMessage message={state.errorMessage} />
              )}
              <S.RegisterButton type='submit'>Join Now</S.RegisterButton>
              <FormFooterLink
                text='Already a member?'
                to='/'
                linkText='Log In!'
              />
            </form>
          </S.RegisterForm>
        </S.Register>
      );
    }
  }
}
