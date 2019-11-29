import React from 'react';
import Predictions from './components/Predictions';

import {Container} from 'semantic-ui-react';

function App() {
  return (
    <Container fluid style={{padding: '40px', background: '#F5F7FB'}}>
      <Predictions />
    </Container>
  );
}

export default App;
