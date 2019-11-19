import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Loader from '../Loader';

afterEach(cleanup)

it('loads loader component with loading test text', () => {
  const {getByTestId} = render(<Loader text='Loading test' />);
  expect(getByTestId('loader')).toHaveTextContent('Loading test');
});
