import React from 'react';
import ReactDOM from 'react-dom';

import Login from '../index';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import GlobalState from '../../../utils/context';

it('renders login', () => {
  const { getByText } = render(<Login />);
});
