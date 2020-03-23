import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import { Pool, Client } from 'pg';
import routes from './modules/routes';
import config from '../config';

const app = express();
const port = process.env.PORT || 3000;

const client = new Client({
  user: config.pgUsername,
  host: config.pgHost,
  password: config.pgPassword,
  database: config.pgDatabase,
  port: 5432,
});
client.connect();

app.use('/api/backlogs', routes.backlogs);
app.use('/api/igdb', routes.igdb);

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
  client.query('SELECT * FROM backlogs', (err, res) => {
    console.log(res);
  });
});
