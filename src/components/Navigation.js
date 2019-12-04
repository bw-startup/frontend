import React from 'react';

import * as S from '../styles';

const Navigation = () => {
  return (
    <S.NavigationContainer>
      <S.NavigationLeft>
        <S.NavigationLink to='/'>All Predictions</S.NavigationLink>
        <S.NavigationLink to='/'>My Predictions</S.NavigationLink>
        <S.NavigationLink to='/'>Predict</S.NavigationLink>
      </S.NavigationLeft>
      <S.NavigationRight>
        <S.NavigationLink to='/login'>Login</S.NavigationLink>
        <S.NavigationLink to='/'>Register</S.NavigationLink>
        <S.NavigationLink to='/'>Log Out</S.NavigationLink>
      </S.NavigationRight>
    </S.NavigationContainer>
  );
};

export default Navigation;
