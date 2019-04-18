import React from 'react';

const GlobalState = React.createContext({
  isLogging: false,
  isRegistering: false,
  isRegisterSuccess: false,
  isPredicting: false,
  token: '',
  errorMessage: ''
});

export default GlobalState;
