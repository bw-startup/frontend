import React from 'react';
import * as S from '../../styles';

const PredictorInputStep = props => {
  return (
    <S.PredictorInputStep>
      <S.PredictorInputStepField>
        <label htmlFor={props.htmlFor}>{props.title}</label>
        <input type={props.type} name={props.name} id={props.id} />
      </S.PredictorInputStepField>
    </S.PredictorInputStep>
  );
};

export default PredictorInputStep;
