import React from 'react';
import { Route } from 'react-router-dom';

import PredictorInput from './PredictorInput';
import PredictorResults from './PredictorResults';
import PredictorOutput from './PredictorOutput';

export default function Predictor() {
  return (
    <div>
      <Route path='/predictor' component={PredictorInput} />
      <PredictorResults path='/predictor/results' component={PredictorOutput} />
    </div>
  );
}
