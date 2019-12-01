import express from 'express';

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
app.use('/api/backlogs', routes.backlogs);
app.use('/api/igdb', routes.igdbApi);

app.listen(config.port, () => console.log(`Listening on port ${config.port}`));