import React from 'react';
import { Route } from 'react-router-dom';

import PredictorResultsRoute from '../PrivateRoutes/PredictorResultsRoute';
import PredictorInput from './PredictorInput';
import PredictorOutput from './PredictorOutput';

export default function Predictor() {
  return (
    <div>
      <Route exact path='/predictor' component={PredictorInput} />
      <PredictorResultsRoute
        exact
        path='/predictor/results'
        component={PredictorOutput}
      />
    </div>
  );
}
