import React, { useState, useContext } from 'react';
import GlobalContext from '../../utils/context';
import {
  PREDICT_START,
  PREDICT_SUCCESS,
  PREDICT_FAILURE
} from '../../utils/constants';

import PredictorInputSteps from './PredictorInputSteps';
import * as S from '../../styles';

export default function PredictorInput(props) {
  const { state, dispatch } = useContext(GlobalContext);

  /**
  |--------------------------------------------------
  | INPUTS
  |--------------------------------------------------
  */

  //  Company Age- (in months)
  //  Industry-
  //  Company Location-
  //  Number of Founders-
  //  Last Funding Amount-
  //  Number of Funding Rounds-
  //  Number of Public News Articles Written About the Company-
  //  Number of Employees-

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
    dispatch({ type: PREDICT_START });
    // dispatch predictor Start
    // post with inputs
    // then
    // dispatch predictor SUCCESS / data
    // history.push "/predictor/results"
    // catch
    // display error bellow form
    setTimeout(() => {
      props.history.push('/predictor/results');
    }, 2000);
  };

  return state.isPredicting ? (
    <p>Predicting trajectory...</p>
  ) : (
    <S.PredictorInput>
      <S.PredictorInputTitle>Let's get your started!</S.PredictorInputTitle>
      <S.PredictorInputForm onSubmit={handlePredictorInputSubmit}>
        <PredictorInputSteps />
      </S.PredictorInputForm>
    </S.PredictorInput>
  );
}
