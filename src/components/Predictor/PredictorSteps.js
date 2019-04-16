import React, { useState } from 'react';
import PredictorStep from './PredictorStep';
import PredictorStepButtons from './PredictorStepButtons';
import * as S from '../../styles';

export default function PredictorInputForm(props) {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const previousStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  // todo:
  // display all inputs on default case

  switch (step) {
    case 0:
      return (
        <div>
          <S.PredictorTitle>Let's get you started!</S.PredictorTitle>
          <PredictorStep
            type='text'
            title='Company Location:'
            htmlFor='companyLocation'
            name='companyLocation'
            id='companyLocation'
          />
          <PredictorStepButtons
            step={step}
            previousStep={previousStep}
            nextStep={nextStep}
          />
        </div>
      );
    case 1:
      return (
        <div>
          <PredictorStep
            type='text'
            title='Company Age:'
            htmlFor='companyAge'
            name='companyAge'
            id='companyAge'
          />
          <PredictorStep
            type='text'
            title='Industry:'
            htmlFor='industry'
            name='industry'
            id='industry'
          />
          <PredictorStep
            type='text'
            title='Number of Public News Articles Written About the Company:'
            htmlFor='numberOfPublicNewsArticles'
            name='numberOfPublicNewsArticles'
            id='numberOfPublicNewsArticles'
          />
          <PredictorStepButtons
            step={step}
            previousStep={previousStep}
            nextStep={nextStep}
          />
        </div>
      );
    case 2:
      return (
        <div>
          <PredictorStep
            type='text'
            title='Number of Funding Rounds:'
            htmlFor='numberOfFundingRounds'
            name='numberOfFundingRounds'
            id='numberOfFundingRounds'
          />
          <PredictorStep
            type='text'
            title='Last Funding Amount:'
            htmlFor='lastFundingAmount'
            name='lastFundingAmount'
            id='lastFundingAmount'
          />
          <PredictorStepButtons
            step={step}
            previousStep={previousStep}
            nextStep={nextStep}
          />
        </div>
      );

    case 3:
      return (
        <div>
          <PredictorStep
            type='text'
            title='Number of Founders:'
            htmlFor='numberOfFounders'
            name='numberOfFounders'
            id='numberOfFounders'
          />
          <PredictorStep
            type='text'
            title='Number of Employees:'
            htmlFor='numberOfEmployees'
            name='numberOfEmployees'
            id='numberOfEmployees'
          />
          <PredictorStepButtons
            step={step}
            previousStep={previousStep}
            nextStep={nextStep}
          />
        </div>
      );
    default:
      return <button type='submit'>See Prediction!</button>;
  }
}
