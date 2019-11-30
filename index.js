import express from 'express';
import axios from 'axios';

import config from './config';
import routes from './routes';
import models from './models';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    req.context = {
      models
    };
    next();
  });
app.use('/backlogs', routes.backlogs);
app.use('/igdbApi', routes.igdbApi);

app.listen(config.port, () => console.log(`Listening on port ${config.port}`));