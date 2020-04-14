import React from 'react';
import { render } from '@testing-library/react';
import HoldDetail from './HoldDetail';
import {MemoryRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'

test('renders learn react link', () => {
  render(<MemoryRouter><HoldDetail /></MemoryRouter>);
});

it('renders the UI as expected', () => {
  const tree = renderer
      .create(<MemoryRouter><HoldDetail /></MemoryRouter>)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
