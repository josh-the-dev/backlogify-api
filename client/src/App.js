import React from 'react';
import './App.css';
import { GameList } from './components/organisms/GameList/';

/* Test list of games to test out component */
const gameList = [
  'Test 1',
  'Test 2',
  'Test 3'
]

function App() {
  return (
    <div className="App">
      <GameList gameList={gameList} />
    </div>
  );
}

export default App;
