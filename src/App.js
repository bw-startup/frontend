import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Login from './components/Login';
import Predictions from './components/Predictions';
import Navigation from './components/Navigation';

import * as S from './styles';

const App = () => {
  const client = new ApolloClient({
    uri: 'https://graphql-backend-startup.herokuapp.com/',
  });

  return (
    <ApolloProvider client={client}>
      <S.GlobalCssReset />
      <S.Container>
        <Router>
          <Navigation />
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/'>
              <Predictions />
            </Route>
          </Switch>
        </Router>
      </S.Container>
    </ApolloProvider>
  );
};

export default App;
