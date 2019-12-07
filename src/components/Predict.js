import React, {useState} from 'react';
import {useMutation} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

import {headquartersOptions, industryOptions} from '../utils/formOptions';

const PREDICT = gql`
  mutation predict(
    $headquarters: String!
    $industry: String!
    $numFundingRounds: Int!
    $numFounders: Int!
    $numEmployees: Int!
    $numArticles: Int!
  ) {
    createPrediction(
      data: {
        headquarters: $headquarters,
        industry: $industry,
        numFundingRounds: $numFundingRounds,
        numFounders: $numFounders,
        numEmployees: $numEmployees,
        numArticles: $numArticles,
        user: {
          connect: '250309968404677138'
        }
      }
    ) {
      _id
      headquarters
      industry
      numFundingRounds
      numFoundersƒ
      numEmployees
      numArticles
      predictionPercent
    }
  }
`;

const Predict = () => {
  const [inputs, setInputs] = useState({
    headquarters: '',
    industry: '',
    numFundingRounds: '',
    numFounders: '',
    numEmployees: '',
    numArticles: '',
  });

  const [predict, {loading: predictLoading, error: predictError}] = useMutation(
    PREDICT,
  );

  const handlePredict = async (event) => {
    event.preventDefault();

    try {
      const response = await predict({
        variables: {
          headquarters: inputs.headquarters,
          industry: inputs.industry,
          numFundingRounds: +inputs.numFundingRounds,
          numFounders: +inputs.numFounders,
          numEmployees: +inputs.numEmployees,
          numArticles: +inputs.numArticles,
        },
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  if (predictLoading) return <div>Loading...</div>;

  return (
    <div>
      <form onSubmit={handlePredict}>
        <div>
          <label htmlFor='headquarters'>Where is this company located?</label>
          <select name='headquarters' id='headquarters' onChange={} value={}>
            {headquartersOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor='industry'>What industry is this company in?</label>
          <select
            type='text'
            name='industry'
            id='industry'
            onChange={}
            value={}
          >
            {industryOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor='numFundingRounds'>
            How many funding rounds has this company received?
          </label>
          <input
            type='text'
            name='numFundingRounds'
            id='numFundingRounds'
            onChange={}
            value={}
          />
        </div>
        <div>
          <label htmlFor='numFounders'>
            How many founders does this company have?
          </label>
          <input
            type='text'
            name='numFounders'
            id='numFounders'
            onChange={}
            value={}
          />
        </div>
        <div>
          <label htmlFor='numEmployees'>
            What is the employee size of this company?
          </label>
          <input
            type='text'
            name='numEmployees'
            id='numEmployees'
            onChange={}
            value={}
          />
        </div>
        <div>
          <label htmlFor='numArticles'>
            How many news articles have been written about this company?
          </label>
          <input
            type='text'
            name='numArticles'
            id='numArticles'
            onChange={}
            value={}
          />
        </div>
        <button>Predict now</button>
      </form>
    </div>
  );
};

export default Predict;
