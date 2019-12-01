
import React from 'react';
import { GameListing } from '../../molecules/GameListing';

export const GameList = ({ gameList = [] }) => {
  return (
    <>
      {
        gameList.map(game => <GameListing key={game.id} gameTitle={game.name}  />)
      }
    </>
  );
}