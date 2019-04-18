import React from 'react';
import * as S from '../../styles';

export default function(props) {
  return (
    <S.StepButtonContainer>
      <S.PreviousStepButton
        visible={props.step > 0 ? true : false}
        onClick={props.previousStep}
      >
        <span style={{ padding: '0 10px' }}>◀</span> Previous
      </S.PreviousStepButton>
      {props.step === 2 ? (
        <S.PredictorStepSubmitButton type='submit'>
          Predict Now <span style={{ padding: '0 10px' }}>▶</span>
        </S.PredictorStepSubmitButton>
      ) : (
        <S.NextStepButton onClick={props.nextStep}>
          Next <span style={{ padding: '0 10px' }}>▶</span>
        </S.NextStepButton>
      )}
    </S.StepButtonContainer>
  );
}
