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
        <S.Header>Welcome back!</S.Header>
        <p>Please sign in to view/save your prections</p>
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
