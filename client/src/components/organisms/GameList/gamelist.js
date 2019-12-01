
import React from 'react';
import { GameListing } from '../../molecules/GameListing';

export const GameList = ({ gameList = [] }) => {
  return (
    <>
      {
        gameList.map(gameTitle => <GameListing key={gameTitle} gameTitle={gameTitle}  />)
      }
    </>
  );
}