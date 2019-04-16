import React from 'react';
import { useCookies } from 'react-cookie';
import { Route, Redirect } from 'react-router-dom';

export default function AuthenticatedRoute({ component: Component, ...rest }) {
  const [cookie] = useCookies(['StartupTrajectoryPredictor']);

  return (
    <Route
      {...rest}
      render={props =>
        // authentication conditional // COOKIE CHECK
        cookie['StartupTrajectoryPredictor'] ? (
          <Component {...props} />
        ) : (
          <Redirect to='/' />
        )
      }
    />
  );
}
