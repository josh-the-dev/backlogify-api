import React from 'react';
import { GameListing } from './';
import renderer from 'react-test-renderer';

test('GameList matches snapshot', () => {
  const tree = renderer
    .create(<GameListing gameTitle='Halo 1' />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});