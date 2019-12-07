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
        headquarters: $headquarters
        industry: $industry
        numFundingRounds: $numFundingRounds
        numFounders: $numFounders
        numEmployees: $numEmployees
        numArticles: $numArticles
      }
    ) {
      _id
      headquarters
      industry
      numFundingRounds
      numFounders
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
    {
      context: {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyNTAzMDk5Njg0MDQ2NzcxMzgiLCJuYW1lIjoiY2hyaXN0aWFuIiwiZW1haWwiOiJjaHJpcy5pcGFuYXF1ZUBnbWFpbC5jb20iLCJpYXQiOjE1NzU3NTA1NjksImV4cCI6MTU3ODM0MjU2OX0.rUMX4euVot9GGQ2A-CwSOQ1PGoc6DxurQ3d1Mt14WiY',
        },
      },
    },
  );

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.id]: event.target.value,
    }));
  };

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

      console.log(response.data);

      setInputs({
        headquarters: '',
        industry: '',
        numFundingRounds: '',
        numFounders: '',
        numEmployees: '',
        numArticles: '',
      });
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
          <select
            name='headquarters'
            id='headquarters'
            onChange={handleInputChange}
            value={inputs.headquarters}
          >
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
            onChange={handleInputChange}
            value={inputs.industry}
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
            onChange={handleInputChange}
            value={inputs.numFundingRounds}
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
            onChange={handleInputChange}
            value={inputs.numFounders}
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
            onChange={handleInputChange}
            value={inputs.numEmployees}
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
            onChange={handleInputChange}
            value={inputs.numArticles}
          />
        </div>
        <button>Predict now</button>
      </form>
    </div>
  );
};

export default Predict;
