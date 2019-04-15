import React from 'react';

const AuthenticationContext = React.createContext({
  isLogging: false,
  isRegistering: false,
  errorMessage: ''
});

export default AuthenticationContext;
