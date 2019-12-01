import React from 'react';
import { GameList } from './';
import renderer from 'react-test-renderer';

test('GameList matches snapshot', () => {
  const listOfGames = [
    'Halo 1',
    'God of War',
    'Super Smash Bros.'
  ]
  
  const tree = renderer
    .create(<GameList gameList={listOfGames} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});