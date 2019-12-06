import React, {useState} from 'react';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

import * as S from '../styles';

const REGISTER_USER = gql`
  mutation registerUser($name: String!, $email: String!, $password: String!) {
    registerUser(data: {name: $name, email: $email, password: $password}) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;

const Register = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleRegister = async (event) => {
    event.preventDefault();

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

  return (
    <S.AuthenticationContainer>
      <S.AuthenticationSplit>
        <S.AuthenticationImg
          src='/images/register.svg'
          alt='User analyzing the results of a startup'
        />
      </S.AuthenticationSplit>
      <S.AuthenticationSplit>
        <S.AuthenticationHeader>
          <S.Header>Hello New Friend!</S.Header>
          <S.SubHeader>Join us and lets get started</S.SubHeader>
        </S.AuthenticationHeader>
        <S.AuthenticationForm onSubmit={handleRegister}>
          <S.AuthenticationField>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              name='name'
              id='name'
              onChange={handleInputChange}
              value={inputs.name}
            />
          </S.AuthenticationField>
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
          <S.AuthenticationButton type='submit'>
            Join Now
          </S.AuthenticationButton>
        </S.AuthenticationForm>
      </S.AuthenticationSplit>
    </S.AuthenticationContainer>
  );
};

export default Register;
