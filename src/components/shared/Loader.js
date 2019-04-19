import React from 'react';
import Loader from 'react-loader-spinner';
import { primaryColor } from '../../styles';
import * as S from '../../styles';

export default function(props) {
  return (
    <S.Loader>
      <Loader
        type={props.type ? props.type : 'ThreeDots'}
        color={props.color ? props.color : primaryColor}
        height={500}
        width={500}
      />
      <S.LoaderText>{props.text}</S.LoaderText>
    </S.Loader>
  );
}
