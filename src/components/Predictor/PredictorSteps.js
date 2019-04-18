import React, { useState } from 'react';
import PredictorStep from './PredictorStep';
import PredictorStepButtons from './PredictorStepButtons';
import {
  headquartersLocationOptions,
  industryOptions
} from '../../utils/formOptions';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
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

  // headquarters,
  // numFounders,
  // numFundingRounds,
  // numArticles,
  // numEmployees,
  // industry

  switch (step) {
    case 0:
      return (
        <div>
          <S.PredictorTitle>Let's get started!</S.PredictorTitle>
          <PredictorStep
            type='select'
            placeholder='Select Location'
            options={headquartersLocationOptions}
            title='Headquarters Location:'
            htmlFor='headquarters'
            name='headquarters'
            id='headquarters'
            value={props.inputs}
            handleInputChange={props.handleInputChange}
          />
          <PredictorStep
            type='select'
            placeholder='Select Industry'
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
          <Progress percent={33} style={{ padding: '20px' }} />
        </div>
      );
    case 1:
      return (
        <div>
          <S.PredictorTitle>Step 2:</S.PredictorTitle>
          <PredictorStep
            type='number'
            title='Number of Funding Rounds:'
            htmlFor='numFundingRounds'
            name='numFundingRounds'
            id='numFundingRounds'
            placeholder='Funding Rounds'
            value={props.inputs}
            handleInputChange={props.handleInputChange}
          />
          <PredictorStep
            type='number'
            title='Number of Founders:'
            htmlFor='numFounders'
            name='numFounders'
            id='numFounders'
            placeholder='Founders'
            value={props.inputs}
            handleInputChange={props.handleInputChange}
          />
          <PredictorStepButtons
            step={step}
            previousStep={previousStep}
            nextStep={nextStep}
          />
          <Progress percent={66} style={{ padding: '20px' }} />
        </div>
      );
    case 2:
      return (
        <div>
          <S.PredictorTitle>Lets see the prediction!</S.PredictorTitle>
          <PredictorStep
            type='number'
            title='Number of Employees:'
            htmlFor='numEmployees'
            name='numEmployees'
            id='numEmployees'
            placeholder='Employees'
            value={props.inputs}
            handleInputChange={props.handleInputChange}
          />

          <PredictorStep
            type='number'
            title='Number of Public News Articles Written About the Company:'
            htmlFor='numArticles'
            name='numArticles'
            id='numArticles'
            placeholder='Public Articles'
            value={props.inputs}
            handleInputChange={props.handleInputChange}
          />
          <PredictorStepButtons
            step={step}
            previousStep={previousStep}
            nextStep={nextStep}
          />
          <Progress percent={100} style={{ padding: '20px' }}  status="success"/>
        </div>
      );
    default:
      return <button type='submit'>See Prediction!</button>;
  }
}
