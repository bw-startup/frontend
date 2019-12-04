import React from 'react';
import * as S from '../styles';

const Login = () => {
  return (
    <S.AuthenticationContainer>
      <S.AuthenticationSplit>
        <S.AuthenticationImg
          src='/images/login.svg'
          alt='User predicting future of startup'
        />
      </S.AuthenticationSplit>
      <S.AuthenticationSplit>
        <S.AuthenticationHeader>
          <S.Header>Welcome back!</S.Header>
          <S.SubHeader>
            Please sign in to view your saved your predictions
          </S.SubHeader>
        </S.AuthenticationHeader>
        <S.AuthenticationForm>
          <S.AuthenticationField>
            <label htmlFor='email'>Email:</label>
            <input type='text' name='email' id='email' />
          </S.AuthenticationField>
          <S.AuthenticationField>
            <label htmlFor='password'>Password:</label>
            <input type='password' name='email' id='email' />
          </S.AuthenticationField>
          <S.AuthenticationButton type='submit'>Login</S.AuthenticationButton>
        </S.AuthenticationForm>
      </S.AuthenticationSplit>
    </S.AuthenticationContainer>
  );
};

export default Login;
