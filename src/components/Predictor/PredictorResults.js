import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PredictorResults({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        // isPredictorInputSubmitted check
        // or is data from predictor available in state
        // remember to useContext to connect to global state
        false ? <Component {...props} /> : <Redirect to='/predictor' />
      }
    />
  );
}
