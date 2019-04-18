import React from 'react';
import * as S from '../../styles';

export default function Profile(props) {
  return (
    <S.Profile>
      <button type='button' onClick={props.handleLogOut}>
        logout
      </button>
      <S.Title>{props.currentUser.email}</S.Title>
      <S.PredictorInputForm onSubmit={props.handleUpdatePasswordSubmit}>
        <S.PredictorInputStepField>
          <label htmlFor='password'>New Password: </label>
          <input
            type='password'
            name='password'
            id='password'
            onChange={props.handleUpdatePasswordChange}
            value={props.currentUser.password}
          />
        </S.PredictorInputStepField>
        <S.PredictorInputStepField>
          <label htmlFor='passwordRepeat'>Repeat New Password: </label>
          <input
            type='password'
            name='password'
            id='passwordRepeat'
            onChange={props.handleUpdatePasswordChange}
            value={props.currentUser.password}
          />
        </S.PredictorInputStepField>
        <S.Button>Update Password</S.Button>
        {props.updatedMessage && (
          <S.FormMessage success>{props.updatedMessage}</S.FormMessage>
        )}
        <button type='button' onClick={props.handleDeleteUser}>
          Delete Account
        </button>
      </S.PredictorInputForm>
    </S.Profile>
  );
}
