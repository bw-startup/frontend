import React from 'react';

import * as S from '../styles';

export default function Navigation() {
  return (
    <div style={{display: 'flex', padding: '40px'}}>
      <S.NavigationLink
        to='/'
        activeStyle={{
          fontWeight: 'bold',
        }}
      >
        All Predictions
      </S.NavigationLink>
      <S.NavigationLink to='/'>My Predictions</S.NavigationLink>
      <S.NavigationLink to='/'>Login</S.NavigationLink>
      <S.NavigationLink to='/'>Register</S.NavigationLink>
      <S.NavigationLink to='/'>Log Out</S.NavigationLink>
    </div>
  );
}
