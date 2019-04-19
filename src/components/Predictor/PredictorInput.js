import React, { useContext } from 'react';
import GlobalContext from '../../utils/context';
import Loader from '../shared/Loader';

import PredictorInputSteps from './PredictorSteps';
import * as S from '../../styles';

export default function PredictorInput(props) {
  const { state } = useContext(GlobalContext);

  return state.isPredicting ? (
    <Loader text='Data Scientist predicting algorithm working...' />
  ) : (
    <S.PredictorInput>
      <S.PredictorInputForm onSubmit={props.handlePredictorInputSubmit}>
        <PredictorInputSteps
          handleInputChange={props.handleInputChange}
          inputs={props.inputs}
        />
      </S.PredictorInputForm>
    </S.PredictorInput>
  );
}
