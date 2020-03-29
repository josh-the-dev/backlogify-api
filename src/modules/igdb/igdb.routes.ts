import express from 'express';
import api from '../../api';

const routes = express.Router();

routes.get('/games/:gameName', async (req, res) => {
  const games = await api.getGames(req.params.gameName);
  return res.status(200).send({ games });
});

routes.get('/platforms/:id', async (req, res) => {
  const platforms = await api.getPlatforms(req.params.id);

  return res.status(200).send({ platforms });
});

export default routes;
