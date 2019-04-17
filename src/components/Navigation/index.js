import React from 'react';
import * as S from '../../styles';

export default function Navigation() {
  return (
    <S.Navigation>
      <S.NavigationLink to='/predictor/members'>Members</S.NavigationLink>
      <S.NavigationLink to='/predictor/myprofile'>My Profile</S.NavigationLink>
      <S.NavigationLink exact to='/predictor'>Predictor</S.NavigationLink>
    </S.Navigation>
  );
}
