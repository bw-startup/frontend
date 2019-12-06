import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const GET_PREDICTIONS_BY_ID = gql`
  query allPredictionsByUserID($id: ID!) {
    allPredictionsByUserID(id: $id) {
      _id
      name
      email
      predictions {
        data {
          _id
          headquarters
          numFounders
          numFundingRounds
          numArticles
          numEmployees
          industry
          predictionPercent
        }
      }
    }
  }
`;

const MyPredictions = () => {
  const {
    loading: getMyPredictionsLoading,
    error: getMyPredictionsError,
    data: getMyPredictions,
  } = useQuery(GET_PREDICTIONS_BY_ID, {
    variables: {
      id: '250309968404677138',
    },
  });

  console.log(getMyPredictions);

  if (getMyPredictionsLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Hi {getMyPredictions.allPredictionsByUserID.name}</h1>
      <div>
        {getMyPredictions.allPredictionsByUserID.predictions.data.map(
          (prediction) => (
            <div key={prediction._id}>{prediction.headquarters}</div>
          ),
        )}
      </div>
    </div>
  );
};

export default MyPredictions;
