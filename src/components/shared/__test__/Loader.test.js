import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import Loader from '../Loader';

afterEach(cleanup);

it('loads loader component with loading test text', () => {
  const {getByTestId} = render(<Loader text='Loading test' />);
  expect(getByTestId('loader')).toHaveTextContent('Loading test');
});

it('loads loader component with Data Science algorithm working test text', () => {
  const {getByTestId} = render(
    <Loader text='Data Science algorithm working...' />,
  );
  expect(getByTestId('loader')).toHaveTextContent(
    'Data Science algorithm working...',
  );
});

it('checks for snapshot match', () => {
  const loaderTree = renderer.create(<Loader />).toJSON();
  expect(loaderTree).toMatchSnapshot();
});
