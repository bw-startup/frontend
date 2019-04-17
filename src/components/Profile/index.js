import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import axiosAuthentication from '../../utils/axiosAuthentication';
import Loader from '../shared/Loader';
import * as S from '../../styles';

export default function Profile(props) {
  const [cookie, removeCookie] = useCookies(['StartupTrajectoryPredictor']);
  const [updatedMessage, setUpdatedMessage] = useState('');
  const [updatedUser, setUpdatedUser] = useState({
    id: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    axiosAuthentication(cookie['StartupTrajectoryPredictor'])
      .get('https://startups7.herokuapp.com/api/me')
      .then(response => {
        console.log(response.data.email);
        setUpdatedUser(inputs => ({
          ...inputs,
          id: response.data.id,
          email: response.data.email
        }));
      })
      .catch(err => console.log(err));
  }, []);

  const handleUpdatePasswordSubmit = event => {
    event.preventDefault();
    console.log(updatedUser);
    axiosAuthentication(cookie['StartupTrajectoryPredictor'])
      .put('https://startups7.herokuapp.com/api/me', updatedUser)
      .then(response => {
        setUpdatedMessage('Password updated successfully!');
        setUpdatedUser(inputs => ({
          ...inputs,
          password: ''
        }));
        console.log(response);
      })
      .catch(err => console.log(err.response.data.message));
  };

  const handleUpdatePasswordChange = event => {
    event.persist();
    setUpdatedUser(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  const handleLogOut = event => {
    event.preventDefault();
    console.log(cookie);
    debugger;
    removeCookie('StartupTrajectoryPredictor');
    debugger;
    props.history.push('/');
  };

  return updatedUser.email ? (
    <S.Profile>
      <button onClick={handleLogOut}>logout</button>
      <S.Title>{updatedUser.email}</S.Title>
      <S.PredictorInputForm onSubmit={handleUpdatePasswordSubmit}>
        <S.PredictorInputStepField>
          <label htmlFor='password'>New Password: </label>
          <input
            type='password'
            name='password'
            id='password'
            onChange={handleUpdatePasswordChange}
            value={updatedUser.password}
          />
        </S.PredictorInputStepField>
        <S.PredictorInputStepField>
          <label htmlFor='passwordRepeat'>Repeat New Password: </label>
          <input
            type='password'
            name='password'
            id='passwordRepeat'
            onChange={handleUpdatePasswordChange}
            value={updatedUser.password}
          />
        </S.PredictorInputStepField>
        <S.Button>Update Password</S.Button>
        {updatedMessage && (
          <S.FormMessage success>{updatedMessage}</S.FormMessage>
        )}
      </S.PredictorInputForm>
    </S.Profile>
  ) : (
    <Loader text='Loading...' />
  );
}
