import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Predictions from './components/Predictions';
import Navigation from './components/Navigation';

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
