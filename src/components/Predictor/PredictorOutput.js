import React from 'react';
import * as S from '../../styles';

export default function PredictorOutput() {
  return (
    <S.PredictorOutput>
      <S.OutputTop>
        <S.OutputItem>$190,000</S.OutputItem>
        <S.OutputItem>198</S.OutputItem>
        <S.OutputItem>$890,000</S.OutputItem>
        <S.OutputItem>3</S.OutputItem>
      </S.OutputTop>
      <S.OutputMiddle>
        <S.OutputItemResult>76%</S.OutputItemResult>
      </S.OutputMiddle>
      <S.OutputBottom>
        <S.OutputItem>$190,000</S.OutputItem>
        <S.OutputItem>$890,000</S.OutputItem>
        <S.OutputItem>3</S.OutputItem>
        <S.OutputItem>198</S.OutputItem>
      </S.OutputBottom>
    </S.PredictorOutput>
  );
}
