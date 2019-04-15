import React from 'react';

const GlobalState = React.createContext({
  isLogging: false,
  isRegistering: false,
  isPredicting: false,
  errorMessage: ''
});

export default GlobalState;
