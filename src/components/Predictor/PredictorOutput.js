import React from 'react';
import AnimatedNumber from 'react-animated-number';
import * as S from '../../styles';

export default function PredictorOutput() {
  const number = 76;
  return (
    <S.PredictorOutput>
      <S.OutputTop>
        <S.OutputItem>$190,000</S.OutputItem>
        <S.OutputItem>198</S.OutputItem>
        <S.OutputItem>$890,000</S.OutputItem>
        <S.OutputItem>3</S.OutputItem>
      </S.OutputTop>
      <S.OutputMiddle>
        <S.OutputItemResult>
          <AnimatedNumber
            style={{
              transition: '0.8s ease-out',
              transitionProperty: 'background-color, color'
            }}
            frameStyle={perc =>
              perc === 100 ? {} : { backgroundColor: 'transparent' }
            }
            duration={900}
            stepPrecision={0}
            value={number}
            formatValue={n => `${n} %`}
          />
        </S.OutputItemResult>
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
