import React from 'react';
import { render } from '@testing-library/react';
import MonthDayCounts from './MonthDayCounts';
import {MemoryRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'

test('renders learn react link', () => {
  render(<MemoryRouter><MonthDayCounts /></MemoryRouter>);
});

it('renders the UI as expected', () => {
  const tree = renderer
      .create(<MemoryRouter><MonthDayCounts /></MemoryRouter>)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
