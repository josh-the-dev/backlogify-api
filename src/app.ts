import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import { Client } from 'pg';
import bodyParser from 'body-parser';

import config from '../config';
export const client = new Client({
  user: config.pgUsername,
  host: config.pgHost,
  password: config.pgPassword,
  database: config.pgDatabase,
  port: 5432,
});
client.connect();
import routes from './modules/routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/backlogs', routes.backlogs);
app.use('/api/backloggames', routes.backlogGames);
app.use('/api/igdb', routes.igdb);
app.use('/api/users', routes.users);

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
