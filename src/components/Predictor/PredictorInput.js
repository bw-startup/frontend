import React, { useState } from 'react';

import {
  PREDICT_START,
  PREDICT_SUCCESS,
  PREDICT_FAILURE
} from '../../utils/constants';

export default function PredictorInput(props) {
  const [inputs, setInputs] = useState({
    input001: '',
    input002: '',
    input003: '',
    input004: ''
  });

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  const handlePredictorInputSubmit = event => {
    event.preventDefault();
    // dispatch predictor Start
    // post with inputs
    // then
    // dispatch predictor SUCCESS / data
    // history.push "/predictor/results"
    // catch
    // display error bellow form
  };

  return (
    <div>
      PREDICTOR INPUT
      <form onSubmit={handlePredictorInputSubmit}>
        <div>Input 001</div>
        <div>
          <input type='text' />
        </div>
        <div>Input 001</div>
        <div>
          <input type='text' />
        </div>
        <div>Input 001</div>
        <div>
          <input type='text' />
        </div>
        <div>
          <button type='submit'>See Prediction!</button>
        </div>
      </form>
    </div>
  );
}
