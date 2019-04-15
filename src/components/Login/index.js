import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import GlobalContext from '../../utils/context';
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../../utils/constants';

import Input from './Input';

export default function Login(props) {
  const { from } = props.location.state || { from: { pathname: '/' } };
  // authentication check // COOKIE CHECK
  if (false) {
    return <Redirect to={from} />;
  }

  const { state, dispatch } = useContext(GlobalContext);

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
    console.log(inputs.email);
    console.log(inputs.password);
    // get data
    // then
    // DISPATCH LOGIN_SUCCESS ON RESPONSE
    // history.push to "/predictor"
    setTimeout(() => {
      props.history.push('/predictor');
    }, 2000);

    // catch
    // display error bellow form
  };

  return (
    <div>
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
    </div>
  );
}
