import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AuthenticationContext from '../context';
import { LOGIN_START } from "../reducer"

export default function Login(props) {
  const { from } = props.location.state || { from: { pathname: '/' } };
  if (false) {
    return <Redirect to={from} />;
  }

  const { state, dispatch } = useContext(AuthenticationContext);

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
    //DISPATCH ON RESPONSE
    dispatch({ type: LOGIN_START });
  };

  return (
    <div>
      {state.isLogging && <p>what</p>}
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label htmlFor='email'>Email:</label>
        </div>
        <div>
          <input
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
          <input
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
    </div>
  );
}
