import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import AnimatedNumber from 'react-animated-number';
import * as S from '../../styles';

// headquarters: '',
// numFounders: '',
// numFundingRounds: '',
// numArticles: '',
// numEmployees: '',
// industry: ''

export default function PredictorOutput(props) {
  const [results, setResults] = useState({});
  const [cookie] = useCookies(['PredictorResults']);
  const latestResult =
    cookie['PredictorResults'][cookie['PredictorResults'].length - 1];

  return (
    <div>
      <S.PredictorOutput>
        <S.OutputTop>
          <S.OutputItem>{latestResult.numEmployees}</S.OutputItem>
          <S.OutputItem>{latestResult.numFounders}</S.OutputItem>
          <S.OutputItem>{latestResult.numFundingRounds}</S.OutputItem>
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
              value={latestResult.prediction}
              formatValue={n => `${n} %`}
            />
          </S.OutputItemResult>
        </S.OutputMiddle>
        <S.OutputBottom>
          <S.OutputItem>{latestResult.numArticles}</S.OutputItem>
          <S.OutputItem>{latestResult.industry}</S.OutputItem>
          <S.OutputItem>{latestResult.headquarters}</S.OutputItem>
        </S.OutputBottom>
        <div>
          {cookie['PredictorResults'].map((result, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                border: '1px solid lightblue',
                margin: '10px'
              }}
            >
              <div style={{ padding: '10px' }}>
                <div>{result.headquarters}</div>
                <div>{result.industry}</div>
              </div>
              <div style={{ padding: '10px' }}>
                <div>employees: {result.numEmployees}</div>
                <div>founders: {result.numFounders}</div>
              </div>
              <div style={{ padding: '10px' }}>
                <div>public articles: {result.numArticles}</div>
                <div>funding rounds: {result.numFundingRounds}</div>
              </div>
              <div style={{ padding: '10px', color: 'green' }}>
                <div>{result.prediction}%</div>
                <div>prediction</div>
              </div>
            </div>
          ))}
        </div>
      </S.PredictorOutput>
    </div>
  );
}
