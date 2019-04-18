import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import Login from './components/Login';
import Register from './components/Register';
import Predictor from './components/Predictor';

import AuthenticationRoute from './components/PrivateRoutes/AuthenticationRoute';

import GlobalState from './utils/context';
import rootReducer from './utils/reducers';

import * as S from './styles';

export default function App() {
  const initialState = useContext(GlobalState);
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <GlobalState.Provider value={{ state, dispatch }}>
      <S.GlobalCssReset/>
      <S.BodyBackgroundForms primary />
      <S.Container>
        <CookiesProvider>
          <BrowserRouter>
            <Switch>
              <Route path='/' exact component={Login} />
              <Route path='/register' exact component={Register} />
              <AuthenticationRoute path='/predictor' component={Predictor} />
              <Route component={Login} />
            </Switch>
          </BrowserRouter>
        </CookiesProvider>
      </S.Container>
    </GlobalState.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
