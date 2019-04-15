import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function AuthenticatedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        // authentication conditional // COOKIE CHECK
        false ? (
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
