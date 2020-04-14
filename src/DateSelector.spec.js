import React from 'react';
import { render } from '@testing-library/react';
import DateSelector from './DateSelector';
import {MemoryRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'

test('renders date selector', () => {
  render(<MemoryRouter><DateSelector /></MemoryRouter>);
});

it('renders the UI as expected', () => {
  const tree = renderer
      .create(<MemoryRouter><DateSelector /></MemoryRouter>)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
