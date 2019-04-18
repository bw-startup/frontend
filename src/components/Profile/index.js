import React from 'react';
import * as S from '../../styles';

export default function Profile(props) {
  return (
    <S.Profile>
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

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <button
            style={{
              cursor: 'pointer',
              borderRadius: '5px',
              padding: '10px',
              border: 'none',
              background: 'darkred',
              color: 'white',
              textTransform: 'uppercase'
            }}
            type='button'
            onClick={props.handleDeleteUser}
          >
            Delete Account
          </button>
          <button
            style={{
              cursor: 'pointer',
              borderRadius: '5px',
              color: 'white',
              padding: '10px',
              border: 'none',
              background: '#4285f4',
              textTransform: 'uppercase'
            }}
            type='button'
            onClick={props.handleLogOut}
          >
            Log Out
          </button>
        </div>
      </S.PredictorInputForm>
    </S.Profile>
  );
}
