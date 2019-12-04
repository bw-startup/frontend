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
        <form>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type='text' name='email' id='email' />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input type='password' name='email' id='email' />
          </div>
          <div>
            <button type='submit'>Login</button>
          </div>
        </form>
      </S.AuthenticationSplit>
    </S.AuthenticationContainer>
  );
};

export default Login;
