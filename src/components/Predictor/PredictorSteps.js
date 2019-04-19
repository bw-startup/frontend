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
          <Progress percent={33} />
          <PredictorStep
            type='select'
            placeholder='Select location'
            options={headquartersLocationOptions}
            title='Where is this company located?'
            htmlFor='headquarters'
            name='headquarters'
            id='headquarters'
            value={props.inputs}
            handleInputChange={props.handleInputChange}
          />
          <PredictorStep
            type='select'
            placeholder='Select industry'
            options={industryOptions}
            title='What industry is this company in?'
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
          <S.PredictorTitle>Step 2:</S.PredictorTitle>
          <Progress percent={70} />
          <PredictorStep
            type='number'
            title='How many funding rounds has this company received?'
            htmlFor='numFundingRounds'
            name='numFundingRounds'
            id='numFundingRounds'
            placeholder='e.g. 3'
            value={props.inputs}
            handleInputChange={props.handleInputChange}
          />
          <PredictorStep
            type='number'
            title='How many people founded this company?'
            htmlFor='numFounders'
            name='numFounders'
            id='numFounders'
            placeholder='e.g. 2'
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
          <S.PredictorTitle>Lets see the prediction!</S.PredictorTitle>
          <Progress
            percent={100}
            style={{ padding: '20px' }}
            status='success'
          />
          <PredictorStep
            type='number'
            title='How many people are employed in this company?'
            htmlFor='numEmployees'
            name='numEmployees'
            id='numEmployees'
            placeholder='e.g. 130'
            value={props.inputs}
            handleInputChange={props.handleInputChange}
          />

          <PredictorStep
            type='number'
            title='How many news articles have been written about this company?'
            htmlFor='numArticles'
            name='numArticles'
            id='numArticles'
            placeholder='e.g. 7'
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
