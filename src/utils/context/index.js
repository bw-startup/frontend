import React from 'react';

const GlobalState = React.createContext({
  isLoggingIn: false,
  isRegistering: false,
  isPredicting: false,
  isDeleting: false,
  errorMessage: ''
});

export default GlobalState;
