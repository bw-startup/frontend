import React from 'react';
import * as S from '../../styles';

export default function(props) {
  return (
    <S.StepButtonContainer>
      <S.PreviousStepButton
        visible={props.step > 0 ? true : false}
        onClick={props.previousStep}
      >
        Previous
      </S.PreviousStepButton>
      {props.step === 3 ? (
        <S.PredictorStepSubmitButton type='submit'>
          See Prediction!
        </S.PredictorStepSubmitButton>
      ) : (
        <S.NextStepButton onClick={props.nextStep}>Next</S.NextStepButton>
      )}
    </S.StepButtonContainer>
  );
}
