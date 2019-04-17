import React, { useState, useContext } from 'react';
import GlobalContext from '../../utils/context';
import {
  PREDICT_START,
  PREDICT_SUCCESS,
  PREDICT_FAILURE
} from '../../utils/constants';
import Loader from '../shared/Loader';

import PredictorInputSteps from './PredictorSteps';
import * as S from '../../styles';

export default function PredictorInput(props) {
  const { state, dispatch } = useContext(GlobalContext);
  /**
  |--------------------------------------------------
  | INPUTS
  |--------------------------------------------------
  */

  // Headquarters Location
  // Industry
  // Number of Founders
  // Number of Funding rounds
  // Number of Articles
  // Number of Employees

  const [inputs, setInputs] = useState({
    headquartersLocation: '',
    industry: '',
    numberOfFounders: '',
    numberOfFundingRounds: '',
    numberOfArticles: '',
    numberOfEmployees: ''
  });

  const handleInputChange = event => {
    console.log('connected');
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  const handlePredictorInputSubmit = event => {
    console.log(inputs);
    event.preventDefault();
    dispatch({ type: PREDICT_START });
    // dispatch predictor Start
    // post with inputs
    // then
    // dispatch predictor SUCCESS / data
    // history.push "/predictor/results"
    // catch
    // display error bellow form
    setTimeout(() => {
      dispatch({ type: PREDICT_SUCCESS });
      props.history.push('/predictor/results');
    }, 2000);
  };

  return state.isPredicting ? (
    <Loader text='Predicting Trajectory...' />
  ) : (
    <S.PredictorInput>
      <S.PredictorInputForm onSubmit={handlePredictorInputSubmit}>
        <PredictorInputSteps
          handleInputChange={handleInputChange}
          inputs={inputs}
        />
      </S.PredictorInputForm>
    </S.PredictorInput>
  );
}
