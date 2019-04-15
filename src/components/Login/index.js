import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AuthenticationContext from '../../utils/context';
import { LOGIN_START } from '../../utils/constants';

export default function Login(props) {
  const { from } = props.location.state || { from: { pathname: '/' } };
  // authentication check // COOKIE CHECK
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
    dispatch({ type: LOGIN_START });
    console.log(inputs.email);
    console.log(inputs.password);
    // get data
    //DISPATCH LOGIN_SUCCESS ON RESPONSE
    // history.push to "/predictor"
    props.history.push('/predictor');
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
      )}
    </div>
  );
}
