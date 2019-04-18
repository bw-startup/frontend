import React from 'react';
import { useCookies } from 'react-cookie';
import AnimatedNumber from 'react-animated-number';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserTie,
  faUsers,
  faChartLine,
  faNewspaper,
  faIndustry,
  faCity
} from '@fortawesome/free-solid-svg-icons';
import * as S from '../../styles';

// headquarters: '',
// numFounders: '',
// numFundingRounds: '',
// numArticles: '',
// numEmployees: '',
// industry: ''

export default function PredictorOutput(props) {
  const [cookie] = useCookies(['PredictorResults']);
  const latestResult = [...cookie['PredictorResults']].pop();

  return (
    <div>
      <S.PredictorOutput>
        <S.OutputTop>
          <S.OutputItem
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center'
            }}
          >
            <div style={{ padding: '0 10px' }}>
              <FontAwesomeIcon icon={faUsers} size='5x' />
            </div>
            <div style={{ padding: '0 10px', textAlign: 'right' }}>
              <div style={{ fontSize: '3rem' }}>
                {latestResult.numEmployees}
              </div>
              <div style={{ fontSize: '.7rem', textAlign: 'right' }}>
                Employees
              </div>
            </div>
          </S.OutputItem>

          <S.OutputItem
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center'
            }}
          >
            <div style={{ padding: '0 10px' }}>
              <FontAwesomeIcon icon={faUserTie} size='5x' />
            </div>
            <div style={{ padding: '0 10px', textAlign: 'right' }}>
              <div style={{ fontSize: '3rem' }}>{latestResult.numFounders}</div>
              <div style={{ fontSize: '.7rem' }}>Founders</div>
            </div>
          </S.OutputItem>

          <S.OutputItem
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center'
            }}
          >
            <div style={{ padding: ' 0 10px' }}>
              <FontAwesomeIcon icon={faChartLine} size='5x' />
            </div>
            <div style={{ padding: ' 0 10px', textAlign: 'right' }}>
              <div style={{ fontSize: '3rem' }}>
                {latestResult.numFundingRounds}
              </div>
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
              formatValue={n => `▲ ${n} %`}
            />
          </S.OutputItemResult>
        </S.OutputMiddle>
        <S.OutputBottom>
          <S.OutputItem
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center'
            }}
          >
            <div style={{ padding: ' 0 10px' }}>
              <FontAwesomeIcon icon={faNewspaper} size='5x' />
            </div>
            <div style={{ padding: ' 0 10px', textAlign: 'right' }}>
              <div style={{ fontSize: '3rem' }}>{latestResult.numArticles}</div>
              <div style={{ fontSize: '.7rem' }}>Public Articles</div>
            </div>
          </S.OutputItem>

          <S.OutputItem
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div style={{ padding: ' 0 10px' }}>
              <FontAwesomeIcon icon={faIndustry} size='5x' />
            </div>
            <div style={{ padding: ' 0 10px' }}>
              <div style={{ fontSize: '1rem' }}>{latestResult.industry}</div>
            </div>
          </S.OutputItem>

          <S.OutputItem
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: '280px'
            }}
          >
            <div style={{ padding: ' 0 10px' }}>
              <FontAwesomeIcon icon={faCity} size='5x' />
            </div>
            <div style={{ padding: ' 0 10px' }}>
              <div style={{ fontSize: '1rem' }}>
                {latestResult.headquarters}
              </div>
            </div>
          </S.OutputItem>
        </S.OutputBottom>
        <div
          style={{
            marginTop: '60px',
            borderTop: '4px solid white',
            width: '100%',
            fontSize: '1rem'
          }}
        >
          <h1 style={{ margin: '40px', fontWeight: '300' }}>
            Prediction History:{' '}
          </h1>
          {cookie['PredictorResults'].map((result, index) => (
            <div
              key={index}
              style={{
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '0 0 80px 0',
                padding: '20px',
                background: 'white'
              }}
            >
              <div style={{ maxWidth: '400px' }}>
                <div style={{ padding: '20px' }}>
                  <div style={{ fontWeight: '400', fontSize: '2rem' }}>
                    {result.headquarters}
                  </div>
                  <div>Location</div>
                </div>

                <div style={{ padding: '20px' }}>
                  <div style={{ fontWeight: '400', fontSize: '2rem' }}>
                    {result.industry}
                  </div>
                  <div>Industry</div>
                </div>
              </div>

              <div>
                <div style={{ padding: '20px', textAlign: 'right' }}>
                  <div style={{ fontWeight: '400', fontSize: '2rem' }}>
                    {result.numEmployees}
                  </div>
                  <div>Employees</div>
                </div>
                <div style={{ padding: '20px', textAlign: 'right' }}>
                  <div style={{ fontWeight: '400', fontSize: '2rem' }}>
                    {result.numFounders}
                  </div>
                  <div>Founders</div>
                </div>
              </div>

              <div>
                <div style={{ padding: '20px', textAlign: 'right' }}>
                  <div style={{ fontWeight: '400', fontSize: '2rem' }}>
                    {result.numFundingRounds}
                  </div>
                  <div>Funding Rounds</div>
                </div>

                <div style={{ padding: '20px', textAlign: 'right' }}>
                  <div style={{ fontWeight: '400', fontSize: '2rem' }}>
                    {result.numArticles}
                  </div>
                  <div>Public Articles</div>
                </div>
              </div>

              <div
                style={{
                  padding: '10px',
                  color: '#249d57',
                  textAlign: 'right'
                }}
              >
                <div style={{ fontSize: '3rem' }}>▲ {result.prediction}%</div>
                <div>Survival Chance</div>
              </div>
            </div>
          ))}
        </div>
      </S.PredictorOutput>
    </div>
  );
}
