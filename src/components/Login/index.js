import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import GlobalContext from '../../utils/context';
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../../utils/constants';
import Loader from '../shared/Loader';

import './Login.scss';

export default function Login(props) {
  const { state, dispatch } = useContext(GlobalContext);
  const [cookie, setCookie] = useCookies(['StartupTrajectoryPredictor']);
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    if (cookie['StartupTrajectoryPredictor']) {
      dispatch({ type: LOGIN_START });
      setTimeout(() => {
        props.history.push('/predictor');
      }, 2000);
    }
  }, []);

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  const handleLoginSubmit = event => {
    event.preventDefault();
    dispatch({ type: LOGIN_START });

    axios
      .post('http://localhost:5000/api/login', inputs)
      .then(response => {
        console.log(response);
        setTimeout(() => {
          dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
          setCookie('StartupTrajectoryPredictor', response.data.token);
          props.history.push('/predictor');
        }, 2000);
      })
      .catch(err => {
        console.log(err);
        setTimeout(() => {
          dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message });
        }, 2000);
      });
  };

  return state.isLogging ? (
    <Loader text='Logging In...' />
  ) : (
    <div className='login__container'>
      <div className='login__image'>
        <img
          className='login__image--img'
          src='/images/investing-login.svg'
          alt='Investing'
        />
      </div>

      <div className='login__form'>
        {state.isRegisterSuccess && (
          <div>
            <p>Thank you for registering!</p>
            <p>Please Log in to continue: </p>
          </div>
        )}
        <h2>Welcome back!</h2>
        <p>Sign in to continue using STP</p>
        <form onSubmit={handleLoginSubmit}>
          <div className='login__field'>
            <label htmlFor='email'>Email:</label>
            <input
              required
              type='email'
              name='email'
              onChange={handleInputChange}
              value={inputs.email}
            />
          </div>
          <div className='login__field'>
            <label htmlFor='password'>Password:</label>
            <input
              required
              type='password'
              name='password'
              onChange={handleInputChange}
              value={inputs.password}
            />
          </div>
          {state.errorMessage && (
            <div className='error'>{state.errorMessage}</div>
          )}
          <div>
            <button className='login__button' type='submit'>
              Log In
            </button>
          </div>
          <div className='login__link'>
            <p>
              Don't have an account?
              <Link to='/register'> Register Here!</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
