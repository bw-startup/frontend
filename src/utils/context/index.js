import React from 'react';

const GlobalState = React.createContext({
  isLoggingIn: false,
  isRegistering: false,
  isPredicting: false,
  errorMessage: '',
  prediction: 0
});

export default GlobalState;
