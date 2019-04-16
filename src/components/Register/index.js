import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import GlobalContext from '../../utils/context';
import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '../../utils/constants';
import Loader from '../shared/Loader';
import ErrorMessage from '../shared/ErrorMessage';
import FormFooterLink from '../shared/FormFooterLink';
import * as S from '../../styles';

export default function Register(props) {
  const { state, dispatch } = useContext(GlobalContext);
  const [cookie] = useCookies(['StartupTrajectoryPredictor']);
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

    axios
      .post('http://localhost:5000/api/register', inputs)
      .then(response => {
        console.log(response);
        setTimeout(() => {
          dispatch({ type: REGISTER_SUCCESS, payload: response.data.message });
          props.history.push('/');
        }, 2000);
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: REGISTER_FAILURE,
          payload: err.response.data.message
        });
      });
  };

  if (cookie['StartupTrajectoryPredictor']) {
    return <Redirect to='/predictor' />;
  } else {
    return state.isRegistering ? (
      <Loader text='Registering...' />
    ) : (
      <S.Register>
        <S.GlobalCssReset/>
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
            <S.RegisterButton type='submit'>Join Now</S.RegisterButton>
            {state.errorMessage && (
              <ErrorMessage message={state.errorMessage} />
            )}
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
