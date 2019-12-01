import React from 'react';
import { GameList } from './';
import renderer from 'react-test-renderer';

test('GameList matches snapshot', () => {
  const listOfGames = [
    {
      id: 1,
      name: 'Halo 1'
    },
    {
      id: 2,
      name: 'God of War'
    },
    {
      id: 3,
      name: 'Super Smash Bros.'
    }
  ]
  
  const tree = renderer
    .create(<GameList gameList={listOfGames} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});