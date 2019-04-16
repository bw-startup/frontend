import React, { useState } from 'react';
import PredictorInputStep from './PredictorInputStep';
import * as S from '../../styles';

export default function PredictorInputForm(props) {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  // todo:
  // display all inputs on default case

  switch (step) {
    case 0:
      return (
        <div>
          <S.PredictorInputTitle>Let's get your started!</S.PredictorInputTitle>
          <PredictorInputStep
            type='text'
            title='Company Location:'
            htmlFor='companyLocation'
            name='companyLocation'
            id='companyLocation'
          />
          <S.PredictorInputStepButton onClick={nextStep}>
            Next
          </S.PredictorInputStepButton>
        </div>
      );
    case 1:
      return (
        <div>
          <PredictorInputStep
            type='text'
            title='Company Age:'
            htmlFor='companyAge'
            name='companyAge'
            id='companyAge'
          />
          <PredictorInputStep
            type='text'
            title='Industry:'
            htmlFor='industry'
            name='industry'
            id='industry'
          />
          <PredictorInputStep
            type='text'
            title='Number of Public News Articles Written About the Company:'
            htmlFor='numberOfPublicNewsArticles'
            name='numberOfPublicNewsArticles'
            id='numberOfPublicNewsArticles'
          />
          <S.PredictorInputStepButton onClick={nextStep}>
            Next
          </S.PredictorInputStepButton>
        </div>
      );
    case 2:
      return (
        <div>
          <PredictorInputStep
            type='text'
            title='Number of Funding Rounds:'
            htmlFor='numberOfFundingRounds'
            name='numberOfFundingRounds'
            id='numberOfFundingRounds'
          />
          <PredictorInputStep
            type='text'
            title='Last Funding Amount:'
            htmlFor='lastFundingAmount'
            name='lastFundingAmount'
            id='lastFundingAmount'
          />
          <S.PredictorInputStepButton onClick={nextStep}>
            Next
          </S.PredictorInputStepButton>
        </div>
      );

    case 3:
      return (
        <div>
          <PredictorInputStep
            type='text'
            title='Number of Founders:'
            htmlFor='numberOfFounders'
            name='numberOfFounders'
            id='numberOfFounders'
          />
          <PredictorInputStep
            type='text'
            title='Number of Employees:'
            htmlFor='numberOfEmployees'
            name='numberOfEmployees'
            id='numberOfEmployees'
          />
          <S.PredictorInputStepSubmitButton type='submit'>
            See Prediction!
          </S.PredictorInputStepSubmitButton>
        </div>
      );
    default:
      return <button type='submit'>See Prediction!</button>;
  }
}
