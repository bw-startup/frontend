import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import AnimatedNumber from 'react-animated-number';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faUsers, faChartLine, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import * as S from '../../styles';

// headquarters: '',
// numFounders: '',
// numFundingRounds: '',
// numArticles: '',
// numEmployees: '',
// industry: ''

export default function PredictorOutput(props) {
  console.log('props output', props);
  const [cookie] = useCookies(['PredictorResults']);
  const latestResult = [...cookie['PredictorResults']].pop();
  console.log('output end', cookie['PredictorResults']);
  console.log('latestresult', latestResult);

  return (
    <div>
      <S.PredictorOutput>
        <S.OutputTop>
          <S.OutputItem style={{ display: 'flex', alignItems: 'flex-end', justifyContent: "center" }}>
            <div style={{ padding: '0 10px' }}>
              <FontAwesomeIcon icon={faUsers} size='5x' />
            </div>
            <div style={{ padding: '0 10px' }}>
              <div style={{ fontSize: '3rem' }}>
                {latestResult.numEmployees}
              </div>
              <div style={{ fontSize: '.7rem' }}>Employees</div>
            </div>
          </S.OutputItem>

          <S.OutputItem style={{ display: 'flex', alignItems: 'flex-end', justifyContent: "center"  }}>
            <div style={{ padding: '0 10px' }}>
              <FontAwesomeIcon icon={faUserTie} size='5x' />
            </div>
            <div style={{ padding: '0 10px' }}>
              <div style={{ fontSize: '3rem' }}>{latestResult.numFounders}</div>
              <div style={{ fontSize: '.7rem' }}>Founders</div>
            </div>
          </S.OutputItem>

          <S.OutputItem style={{ display: 'flex', alignItems: 'flex-end', justifyContent: "center"  }}>
            <div style={{ padding: ' 0 10px' }}>
              <FontAwesomeIcon icon={faChartLine} size='5x' />
            </div>
            <div style={{ padding: ' 0 10px' }}>
              <div style={{ fontSize: '3rem' }}>{latestResult.numFundingRounds}</div>
              <div style={{ fontSize: '.7rem' }}>Funding Rounds</div>
            </div>
          </S.OutputItem>

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

        <S.OutputItem style={{ display: 'flex', alignItems: 'flex-end', justifyContent: "center"  }}>
            <div style={{ padding: ' 0 10px' }}>
              <FontAwesomeIcon icon={faNewspaper} size='5x' />
            </div>
            <div style={{ padding: ' 0 10px' }}>
              <div style={{ fontSize: '3rem' }}>{latestResult.numArticles}</div>
              <div style={{ fontSize: '.7rem' }}>Public Articles</div>
            </div>
          </S.OutputItem>

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
