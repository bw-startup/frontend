import React from 'react';
import { useCookies } from 'react-cookie';
import * as S from '../../styles';

export default function Navigation() {
  const [cookie] = useCookies(['PredictorResults']);
  return (
    <S.Navigation>
      <S.NavigationLink to='/predictor/members'>Members</S.NavigationLink>
      <S.NavigationLink to='/predictor/myprofile'>My Profile</S.NavigationLink>
      <S.NavigationLink exact to='/predictor'>
        Predictor
      </S.NavigationLink>
      {cookie['PredictorResults'] && (
        <S.NavigationLink to='/predictor/results'>Results</S.NavigationLink>
      )}
    </S.Navigation>
  );
}
