import express from 'express';
import api from '../../api/api';

const routes = express.Router();

routes.get('/games', async (req, res) => {
  const games = await api.getGames();
  return res.status(200).send({ games: games });
});

export default routes;
