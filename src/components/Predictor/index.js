import React from 'react';
import { Route } from 'react-router-dom';

import PredictorInput from './PredictorInput';
import PredictorOutput from './PredictorOutput';

export default function Predictor() {
  return (
    <div>
      <Route path='/predictor' component={PredictorInput} />
      <Route path='/predictor/results' component={PredictorOutput} />
    </div>
  );
}
