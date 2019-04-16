import React from 'react';
import * as S from '../../styles';

export default function(props) {
  return <S.ErrorMessage>{props.message}</S.ErrorMessage>;
}
