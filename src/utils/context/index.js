import React from 'react';

const GlobalState = React.createContext({
  isLoggingIn: false,
  isLoggingOut: false,
  isRegistering: false,
  isPredicting: false,
  isDeleting: false,
  isUpdating: false,
  errorMessage: '',
});

export default GlobalState;
