import React from 'react';
import {useQuery} from '@apollo/react-hooks';

const GET_PREDICTIONS_BY_ID = gql`
  query allPredictionsByUserID($id: String!) {
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
  } = useQuery(GET_PREDICTIONS_BY_ID);

  return (
    <div>
      {getMyPredictions.data.allPreditionsByUserID.data.map((prediction) => (
        <div>{prediction.name}</div>
      ))}
    </div>
  );
};

export default MyPredictions;
