import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Predictor from './components/Predictor';

import AuthenticatedRoute from './components/AuthenticatedRoute';

import AuthenticationContext from './components/context';
import { authenticationReducer } from './components/reducer';

export default function App() {
  const initialState = useContext(AuthenticationContext);
  const [state, dispatch] = useReducer(authenticationReducer, initialState);

  return (
    <AuthenticationContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Route path='/' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <AuthenticatedRoute path='/predictor' component={Predictor} />
      </BrowserRouter>
    </AuthenticationContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
