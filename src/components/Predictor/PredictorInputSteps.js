import React, { useState } from 'react';

export default function PredictorInputForm(props) {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  switch (step) {
    case 0:
      return (
        <div>
          <div>
            <label htmlFor='companyLocation'>Company Location:</label>
            <input type='text' name='companyLocation' id='companyLocation' />
          </div>
          <div onClick={nextStep}>Next</div>
        </div>
      );
    case 1:
      return (
        <div>
          <div>
            <label htmlFor='companyAge'>Company Age</label>
            <input
              type='text'
              name='companyAge'
              id='companyAge'
              placeholder='in months'
            />
          </div>
          <div>
            <label htmlFor='industry'>Industry: </label>
            <input type='text' name='industry' id='industry' />
          </div>
          <div>
            <label htmlFor='numberOfPublicNewsArticles'>
              Number of Public News Articles Written About the Company:
            </label>
            <input
              type='text'
              name='numberOfPublicNewsArticles'
              id='numberOfPublicNewsArticles'
            />
          </div>
          <div onClick={nextStep}>Next</div>
        </div>
      );
    case 2:
      return (
        <div>
          <div>
            <label htmlFor='numberOfFundingRounds'>
              Number of Funding Rounds:
            </label>
            <input
              type='text'
              name='numberOfFundingRounds'
              id='numberOfFundingRounds'
            />
          </div>
          <div>
            <label htmlFor='lastFundingAmount'>Last Funding Amount:</label>
            <input
              type='text'
              name='lastFundingAmount'
              id='lastFundingAmount'
            />
          </div>
          <div onClick={nextStep}>Next</div>
        </div>
      );

    case 3:
      return (
        <div>
          <div>
            <label htmlFor='numberOfFounders'>Number of Founders:</label>
            <input type='text' name='numberOfFounders' id='numberOfFounders' />
          </div>
          <div>
            <label htmlFor='numberOfEmployees'>Number of Employees:</label>
            <input
              type='text'
              name='numberOfEmployees'
              id='numberOfEmployees'
            />
          </div>
          <div>
            <button type='submit'>See Prediction!</button>
          </div>
        </div>
      );
    default:
      return <button type='submit'>See Prediction!</button>;
  }
}
