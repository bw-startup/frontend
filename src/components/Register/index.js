import React, { useState, useContext } from 'react';
import GlobalContext from '../../utils/context';
import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '../../utils/constants';

export default function Register(props) {
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

  const handleRegisterSubmit = event => {
    event.preventDefault();
    dispatch({ type: REGISTER_START });
    // get data
    // then
    // DISPATCH REGISTER_SUCCESS ON RESPONSE
    // history.push "/predictor"
    // catch
    // display error bellow form
  };

  return (
    <div>
      {state.isRegistering && <p>Registering...</p>}
      <form onSubmit={handleRegisterSubmit}>
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
          <button type='submit'>Register Now</button>
        </div>
      </form>
    </div>
  );
}
