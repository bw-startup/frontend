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
    <div>
      {data.allPredictions.data.map((prediction) => (
        <S.Prediction>
          <S.PredictionLeft>
            <S.PredictionColumn>
              <S.PredictionRow>{prediction.headquarters}</S.PredictionRow>
              <S.PredictionRow>{prediction.industry}</S.PredictionRow>
            </S.PredictionColumn>
            <S.PredictionColumn>
              <S.PredictionRow>{prediction.numFundingRounds}</S.PredictionRow>
              <S.PredictionRow>{prediction.numArticles}</S.PredictionRow>
            </S.PredictionColumn>
            <S.PredictionColumn>
              <S.PredictionRow>{prediction.numFounders}</S.PredictionRow>
              <S.PredictionRow>{prediction.numEmployees}</S.PredictionRow>
            </S.PredictionColumn>
          </S.PredictionLeft>
          <S.PredictionRight>{prediction.predictionPercent}</S.PredictionRight>
        </S.Prediction>
      ))}
    </div>
  );
}
