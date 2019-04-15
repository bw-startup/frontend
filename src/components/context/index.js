import React from 'react';

const AuthenticationContext = React.createContext({
  isLogging: false,
  isFetching: false,
  errorMessage: ''
});

export default AuthenticationContext;
