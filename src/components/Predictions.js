import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

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
      {data.allPredictions.data.map((prediction) => prediction.headquarters)}
    </div>
  );
}
