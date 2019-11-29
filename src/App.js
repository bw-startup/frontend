import React from 'react';
import Predictions from './components/Predictions';
import Navigation from './components/Navigation';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import * as S from './styles';

function App() {
  return (
    <S.Container>
      <Router>
        <Navigation />
        <Switch>
          <Route path='/'>
            <Predictions />
          </Route>
        </Switch>
      </Router>
    </S.Container>
  );
}

export default App;
