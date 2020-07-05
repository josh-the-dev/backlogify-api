import express from 'express';
import api from '../../api';
import { Game } from 'src/types';

const routes = express.Router();

routes.get('/games/:gameName', async (req, res) => {
  const gamesResponse = await api.getGames(req.params.gameName);
  const games: Game[] = [];
  gamesResponse.forEach(game => {
    if (game.cover) {
      game.cover.url = game.cover.url
        .replace('thumb', 'cover_small')
        .replace('//', 'https://');
      games.push(game);
    } else {
      games.push(game);
    }
  });
  return res.status(200).send(games);
});

routes.get('/platforms/:id', async (req, res) => {
  const platforms = await api.getPlatforms(req.params.id);

  return res.status(200).send(platforms);
});

export default routes;
