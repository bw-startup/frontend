import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import axiosAuthentication from '../../utils/axiosAuthentication';
import Loader from "../shared/Loader"
import * as S from '../../styles';

export default function Profile() {
  const [cookie] = useCookies(['StartupTrajectoryPredictor']);

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
      .then(response => console.log(response))
      .catch(err => console.log(err.response.data.message));
  };

  const handleUpdatePasswordChange = event => {
    event.persist();
    setUpdatedUser(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return updatedUser.email ? (
    <S.Profile>
      <S.Title>{updatedUser.email}</S.Title>
      <S.PredictorInputForm onSubmit={handleUpdatePasswordSubmit}>
        <S.PredictorInputStepField>
          <label htmlFor='password'>New Password: </label>
          <input
            type='password'
            name='password'
            id='password'
            onChange={handleUpdatePasswordChange}
          />
        </S.PredictorInputStepField>
        <S.PredictorInputStepField>
          <label htmlFor='passwordRepeat'>Repeat New Password: </label>
          <input
            type='password'
            name='password'
            id='passwordRepeat'
            onChange={handleUpdatePasswordChange}
          />
        </S.PredictorInputStepField>
        <S.PredictorStepSubmitButton>
          Update Password
        </S.PredictorStepSubmitButton>
      </S.PredictorInputForm>
    </S.Profile>
  ) : (
    <Loader text='Loading...' />
  );
}
