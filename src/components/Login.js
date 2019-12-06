import React, {useState} from 'react';
import {useMutation} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

import * as S from '../styles';

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(data: {email: $email, password: $password}) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;

const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const [loginUser, {loading: loginLoading, error: loginError}] = useMutation(
    LOGIN_USER,
  );

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await loginUser({
        variables: {
          email: inputs.email,
          password: inputs.password,
        },
      });

      console.log('response', response.data.loginUser.token);
    } catch (error) {
      console.log(error.message);
    }

    setInputs(() => ({
      email: '',
      password: '',
    }));
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.id]: event.target.value,
    }));
  };

  if (loginLoading) return <S.Header>Loading...</S.Header>;

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
        <S.AuthenticationForm onSubmit={handleLogin}>
          <S.AuthenticationField>
            <label htmlFor='email'>Email:</label>
            <input
              type='text'
              name='email'
              id='email'
              onChange={handleInputChange}
              value={inputs.email}
            />
          </S.AuthenticationField>
          <S.AuthenticationField>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              name='password'
              id='password'
              onChange={handleInputChange}
              value={inputs.password}
            />
          </S.AuthenticationField>
          <S.AuthenticationButton type='submit'>Login</S.AuthenticationButton>
          {loginError && <div>Please try again</div>}
        </S.AuthenticationForm>
      </S.AuthenticationSplit>
    </S.AuthenticationContainer>
  );
};

export default Login;
