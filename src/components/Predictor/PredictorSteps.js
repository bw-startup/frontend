import React, { useState } from 'react';
import PredictorStep from './PredictorStep';
import PredictorStepButtons from './PredictorStepButtons';
import {
  headquartersLocationOptions,
  industryOptions
} from '../../utils/formOptions';
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

  // Headquarters Location
  // Industry
  // Number of Founders
  // Number of Funding rounds
  // Number of Articles
  // Number of Employees

  // headquartersLocation: '',
  // industry: '',
  // numberOfFounders: '',
  // numberOfFundingRounds: '',
  // numberOfArticles: '',
  // numberOfEmployees: ''

  switch (step) {
    case 0:
      return (
        <div>
          <S.PredictorTitle>Let's get started!</S.PredictorTitle>
          <PredictorStep
            type='select'
            placeholder="Select Location"
            options={headquartersLocationOptions}
            title='Headquarters Location:'
            htmlFor='headquartersLocation'
            name='headquartersLocation'
            id='headquartersLocation'
            value={props.inputs}
            handleInputChange={props.handleInputChange}
          />
          <PredictorStep
            type='select'
            placeholder="Select Industry"
            options={industryOptions}
            title='Industry:'
            htmlFor='industry'
            name='industry'
            id='industry'
            value={props.inputs}
            handleInputChange={props.handleInputChange}
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
            type='number'
            title='Number of Funding Rounds:'
            htmlFor='numberOfFundingRounds'
            name='numberOfFundingRounds'
            id='numberOfFundingRounds'
            placeholder="Enter number of Funding Rounds"
            value={props.inputs}
            handleInputChange={props.handleInputChange}
          />
          <PredictorStep
            type='number'
            title='Number of Founders:'
            htmlFor='numberOfFounders'
            name='numberOfFounders'
            id='numberOfFounders'
            placeholder="Enter number of Founders"
            value={props.inputs}
            handleInputChange={props.handleInputChange}
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
            type='number'
            title='Number of Employees:'
            htmlFor='numberOfEmployees'
            name='numberOfEmployees'
            id='numberOfEmployees'
            placeholder="Enter number of Employes"
            value={props.inputs}
            handleInputChange={props.handleInputChange}
          />

          <PredictorStep
            type='number'
            title='Number of Public News Articles Written About the Company:'
            htmlFor='numberOfArticles'
            name='numberOfArticles'
            id='numberOfArticles'
            placeholder="Enter number of Public Articles"
            value={props.inputs}
            handleInputChange={props.handleInputChange}
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
