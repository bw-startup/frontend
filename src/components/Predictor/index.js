import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from '../Navigation';
import Members from '../Members';
import Profile from '../Profile';
import PredictorResultsRoute from '../PrivateRoutes/PredictorResultsRoute';
import PredictorInput from './PredictorInput';
import PredictorOutput from './PredictorOutput';

import * as S from '../../styles';

export default function Predictor() {
  return (
    <S.Predictor>
      <S.BodyBackgroundPredictor primary />
      <Navigation />
      <Route exact path='/predictor/members' component={Members} />
      <Route exact path='/predictor/myprofile' component={Profile} />
      <Route exact path='/predictor' component={PredictorInput} />
      <PredictorResultsRoute
        exact
        path='/predictor/results'
        component={PredictorOutput}
      />
    </S.Predictor>
  );
}
