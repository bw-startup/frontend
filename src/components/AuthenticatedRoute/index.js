import React from 'react';
import { useCookies } from 'react-cookie';
import { Route, Redirect } from 'react-router-dom';

export default function AuthenticatedRoute({ component: Component, ...rest }) {
  const [cookie, setCookie] = useCookies(['StartupTrajectoryPredictor']);
  console.log('cookie', cookie);
  console.log('cookie stp', cookie['StartupTrajectoryPredictor']);
  return (
    <Route
      {...rest}
      render={props =>
        // authentication conditional // COOKIE CHECK
        cookie.StartupTrajectoryPredictor ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
