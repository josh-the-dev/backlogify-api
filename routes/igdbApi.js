import axios from 'axios';

import config from '../config';
import { Router } from 'express';
const router = Router();

axios.defaults.baseURL = config.igdbBaseUrl;
axios.defaults.headers.common['User-Key'] = config.igdbApiKey;

/* GET GENERIC 10 GAMES */
router.get('/games', (req, res) => {
  return axios({ method: 'POST', url: '/games', data:'fields name;'})
    .then(response => res.send(response.data))
});

/* GET SPECIFIC GAME USING NAME */
router.get('/games/:name', (req, res) => {
  console.log(req.params)
  return axios({ method: 'POST', url: '/games', data: `fields name; search "${req.params.name}";` })
    .then(response => res.send(response.data))
})

export default router;