import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Predictor from './components/Predictor';

import AuthenticatedRoute from './components/AuthenticatedRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Login} />
      <Route path='/register' exact component={Register} />
      <AuthenticatedRoute path='/predictor' component={Predictor} />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
