import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Loader from '../shared/Loader';
import * as S from '../../styles';

export default function Profile(props) {
  return props.currentUser.email ? (
    <S.Profile>
      <div onClick={props.handleLogOut}>logout</div>
      <S.Title>{props.currentUser.email}</S.Title>
      <S.PredictorInputForm onSubmit={props.handleUpdatePasswordSubmit}>
        <S.PredictorInputStepField>
          <label htmlFor='password'>New Password: </label>
          <input
            type='password'
            name='password'
            id='password'
            onChange={props.handleUpdatePasswordSubmit}
            value={props.currentUser.password}
          />
        </S.PredictorInputStepField>
        <S.PredictorInputStepField>
          <label htmlFor='passwordRepeat'>Repeat New Password: </label>
          <input
            type='password'
            name='password'
            id='passwordRepeat'
            onChange={props.handleUpdatePasswordSubmit}
            value={props.currentUser.password}
          />
        </S.PredictorInputStepField>
        <S.Button>Update Password</S.Button>
        {props.updatedMessage && (
          <S.FormMessage success>{props.updatedMessage}</S.FormMessage>
        )}
        <div onClick={props.handleDeleteUser}>Delete Account</div>
      </S.PredictorInputForm>
    </S.Profile>
  ) : (
    <Loader text='Loading...' />
  );
}
