import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

import * as S from '../styles';

const ALL_PREDICTIONS = gql`
  {
    allPredictions {
      data {
        _id
        headquarters
        numFounders
        numFundingRounds
        numArticles
        numEmployees
        industry
        predictionPercent
        user {
          _id
          name
          email
        }
      }
    }
  }
`;

export default function Predictions() {
  const {loading, error, data} = useQuery(ALL_PREDICTIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: </p>;

  return (
    <S.PredictionContainer>
      {data.allPredictions.data.map((prediction) => (
        <S.Prediction>
          <S.PredictionLeft>
            <S.PredictionColumn>
              <S.PredictionRow>
                <S.PredictionDataLeftHeader>
                  {prediction.headquarters}
                </S.PredictionDataLeftHeader>
                <S.PredictionDataLeftSubHeader>
                  Location
                </S.PredictionDataLeftSubHeader>
              </S.PredictionRow>
              <S.PredictionRow>
                <S.PredictionDataLeftHeader>
                  {prediction.industry}
                </S.PredictionDataLeftHeader>
                <S.PredictionDataLeftSubHeader>
                  Industry
                </S.PredictionDataLeftSubHeader>
              </S.PredictionRow>
            </S.PredictionColumn>
            <S.PredictionColumn>
              <S.PredictionRow>
                <S.PredictionDataRightHeader>
                  {prediction.numFundingRounds}
                </S.PredictionDataRightHeader>
                <S.PredictionDataRightSubHeader>
                  Funding Rounds
                </S.PredictionDataRightSubHeader>
              </S.PredictionRow>
              <S.PredictionRow>
                <S.PredictionDataRightHeader>
                  {prediction.numArticles}
                </S.PredictionDataRightHeader>
                <S.PredictionDataRightSubHeader>
                  Public Articles
                </S.PredictionDataRightSubHeader>
              </S.PredictionRow>
            </S.PredictionColumn>
            <S.PredictionColumn>
              <S.PredictionRow>
                <S.PredictionDataRightHeader>
                  {prediction.numFounders}
                </S.PredictionDataRightHeader>
                <S.PredictionDataRightSubHeader>
                  Founders
                </S.PredictionDataRightSubHeader>
              </S.PredictionRow>
              <S.PredictionRow>
                <S.PredictionDataRightHeader>
                  {prediction.numEmployees}
                </S.PredictionDataRightHeader>
                <S.PredictionDataRightSubHeader>
                  Employees
                </S.PredictionDataRightSubHeader>
              </S.PredictionRow>
            </S.PredictionColumn>
          </S.PredictionLeft>
          <S.PredictionRight>
            <S.PredictionRow>
              <S.PredictionPercentRightHeader>
                {prediction.predictionPercent} %
              </S.PredictionPercentRightHeader>
              <S.PredictionPercentRightSubHeader>
                Survival Chance
              </S.PredictionPercentRightSubHeader>
            </S.PredictionRow>
          </S.PredictionRight>
        </S.Prediction>
      ))}
    </S.PredictionContainer>
  );
}
