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

const Predictions = () => {
  // const {loading, error, data} = useQuery(ALL_PREDICTIONS);
  const data = {
    allPredictions: {
      data: [
        {
          _id: '21421424',
          headquarters: 'San Francisco, California, United States',
          numFounders: 1,
          numFundingRounds: 4,
          numArticles: 3,
          numEmployees: 20,
          industry: 'Software',
          predictionPercent: 30.5,
        },
        {
          _id: '214214265',
          headquarters: 'San Jose, California, United States',
          numFounders: 1,
          numFundingRounds: 4,
          numArticles: 3,
          numEmployees: 20,
          industry: 'Artificial Intelligence',
          predictionPercent: 30.5,
        },
        {
          _id: '2142142656',
          headquarters: 'Washington, District of Columbia, United States',
          numFounders: 1,
          numFundingRounds: 4,
          numArticles: 3,
          numEmployees: 20,
          industry: 'Information Technology',
          predictionPercent: 90.5,
        },
        {
          _id: '214214265661',
          headquarters: 'Washington, District of Columbia, United States',
          numFounders: 1,
          numFundingRounds: 4,
          numArticles: 3,
          numEmployees: 20,
          industry: 'Telecommunications',
          predictionPercent: 40.5,
        },
      ],
    },
  };

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: </p>;

  return (
    <S.PredictionContainer>
      {data.allPredictions.data.map(
        ({
          _id,
          headquarters,
          numFounders,
          numFundingRounds,
          numArticles,
          numEmployees,
          industry,
          predictionPercent,
        }) => (
          <S.Prediction key={_id}>
            <S.PredictionLeft>
              <S.PredictionColumn>
                <S.PredictionRow>
                  <S.PredictionDataLeftHeader>
                    {headquarters}
                  </S.PredictionDataLeftHeader>
                  <S.PredictionDataLeftSubHeader>
                    Location
                  </S.PredictionDataLeftSubHeader>
                </S.PredictionRow>
                <S.PredictionRow>
                  <S.PredictionDataLeftHeader>
                    {industry}
                  </S.PredictionDataLeftHeader>
                  <S.PredictionDataLeftSubHeader>
                    Industry
                  </S.PredictionDataLeftSubHeader>
                </S.PredictionRow>
              </S.PredictionColumn>
              <S.PredictionColumn>
                <S.PredictionRow>
                  <S.PredictionDataRightHeader>
                    {numFundingRounds}
                  </S.PredictionDataRightHeader>
                  <S.PredictionDataRightSubHeader>
                    Funding Rounds
                  </S.PredictionDataRightSubHeader>
                </S.PredictionRow>
                <S.PredictionRow>
                  <S.PredictionDataRightHeader>
                    {numArticles}
                  </S.PredictionDataRightHeader>
                  <S.PredictionDataRightSubHeader>
                    Public Articles
                  </S.PredictionDataRightSubHeader>
                </S.PredictionRow>
              </S.PredictionColumn>
              <S.PredictionColumn>
                <S.PredictionRow>
                  <S.PredictionDataRightHeader>
                    {numFounders}
                  </S.PredictionDataRightHeader>
                  <S.PredictionDataRightSubHeader>
                    Founders
                  </S.PredictionDataRightSubHeader>
                </S.PredictionRow>
                <S.PredictionRow>
                  <S.PredictionDataRightHeader>
                    {numEmployees}
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
                  {predictionPercent} %
                </S.PredictionPercentRightHeader>
                <S.PredictionPercentRightSubHeader>
                  Survival Chance
                </S.PredictionPercentRightSubHeader>
              </S.PredictionRow>
            </S.PredictionRight>
          </S.Prediction>
        ),
      )}
    </S.PredictionContainer>
  );
};

export default Predictions;
