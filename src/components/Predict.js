import React, {useState} from 'react';
import {useMutation} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const Predict = () => {
  const [inputs, setInputs] = useState({
    headquarters: '',
    industry: '',
    numFundingRounds: '',
    numFounders: '',
    numEmployees: '',
    numArticles: '',
  });

  return (
    <div>
      <form>
        <div>
          <label htmlFor='headquarters'>Where is this company located?</label>
          <input type='text' />
        </div>
        <div>
          <label htmlFor='industry'>What industry is this company in?</label>
          <input type='text' />
        </div>
        <div>
          <label htmlFor='fundingRounds'>
            How many funding rounds has this company received?
          </label>
          <input type='text' />
        </div>
        <div>
          <label htmlFor='numFounders'>
            How many founders does this company have?
          </label>
          <input type='text' />
        </div>
        <div>
          <label htmlFor='numEmployees'>
            What is the employee size of this company?
          </label>
          <input type='text' />
        </div>
        <div>
          <label htmlFor='numArticles'>
            How many news articles have been written about this company?
          </label>
          <input type='text' />
        </div>
        <button>Predict now</button>
      </form>
    </div>
  );
};

export default Predict;
