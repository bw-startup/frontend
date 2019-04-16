import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import GlobalContext from '../../utils/context';
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../../utils/constants';

import Input from './Input';

export default function Login(props) {
  const { state, dispatch } = useContext(GlobalContext);
  const [cookie, setCookie] = useCookies(['StartupTrajectoryPredictor']);
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

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
        }, 2000);
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message });
      });
  };

  if (cookie['StartupTrajectoryPredictor']) {
    return <Redirect to='/predictor' />;
  } else {
    return (
      <div>
        {state.isRegisterSuccess && (
          <div>
            <p>Thank you for registering!</p>
            <p>Please Log in to continue: </p>
          </div>
        )}

        {state.isLogging ? (
          <p>Logging in...</p>
        ) : (
          <form onSubmit={handleLoginSubmit}>
            <div>
              <label htmlFor='email'>Email:</label>
            </div>
            <div>
              <Input
                required
                type='email'
                name='email'
                onChange={handleInputChange}
                value={inputs.email}
              />
            </div>
            <div>
              <label htmlFor='password'>Password:</label>
            </div>
            <div>
              <Input
                required
                type='password'
                name='password'
                onChange={handleInputChange}
                value={inputs.password}
              />
            </div>
            <div>
              <button type='submit'>Log In</button>
            </div>
          </form>
        )}

        {state.errorMessage && <p>{state.errorMessage}</p>}
      </div>
    );
  }
}
