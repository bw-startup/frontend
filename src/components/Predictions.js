import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

import {Grid, Header} from 'semantic-ui-react';

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
        <Grid
          columns={4}
          stackable
          style={{
            border: '1px solid #F5F7FB',
            background: '#FFFFFF',
            margin: '40px 0',
          }}
          key={prediction._id}
        >
          <Grid.Row stretched>
            <Grid.Column width={6}>
              <Header size='medium'>
                {prediction.headquarters}
                <Header.Subheader>Location</Header.Subheader>
              </Header>
              <Header size='medium'>
                {prediction.industry}
                <Header.Subheader>Industry</Header.Subheader>
              </Header>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header size='huge' style={{textAlign: 'right'}}>
                {prediction.numFundingRounds}
                <Header.Subheader>Funding Rounds</Header.Subheader>
              </Header>
              <Header size='huge' style={{textAlign: 'right'}}>
                {prediction.numArticles}
                <Header.Subheader>Public Articles</Header.Subheader>
              </Header>
            </Grid.Column>
            <Grid.Column width={2}>
              <Header size='huge' style={{textAlign: 'right'}}>
                {prediction.numFounders}
                <Header.Subheader>Founders</Header.Subheader>
              </Header>
              <Header size='huge' style={{textAlign: 'right'}}>
                {prediction.numEmployees}
                <Header.Subheader>Employees</Header.Subheader>
              </Header>
            </Grid.Column>
            <Grid.Column
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}
              width={5}
            >
              <Header
                size='huge'
                color='green'
                style={{fontSize: '50px', textAlign: 'right'}}
              >
                {prediction.predictionPercent}%
                <Header.Subheader>Survival Chance</Header.Subheader>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      ))}
    </div>
  );
}
