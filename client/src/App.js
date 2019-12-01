import React, { useState } from "react";
import "./App.css";
import { GameList } from "./components/organisms/GameList/";
import Axios from "axios";

const App = () => {
  const [gameList, updateGameList] = useState([]);

  const searchGames = () => {
    Axios.get("/api/igdb/games").then(res => updateGameList(res.data));
  }

  return (
    <div className="App">
      <button onClick={() => searchGames()}>Search games!</button>
      <GameList gameList={gameList} />
    </div>
  );
};

export default App;
