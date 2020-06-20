import express from 'express';
import { client } from '../../app';
import { User } from 'src/types';

const routes = express.Router();

routes.post('/register', async (req, res) => {
  const { username, password }: User = req.body;
  // password is plain text atm. Need to change this.
  client.query(
    `INSERT INTO accounts(username, password) VALUES ('${username}', '${password}')`,
    (err, results) => {
      if (err) {
        throw err;
      }
      if (results.rowCount === 0) {
        return res.sendStatus(404);
      } else {
        return res.status(201).json({ message: 'Account added' });
      }
    }
  );
});

routes.get('/:id/backlogs', async (req, res) => {
  const { id } = req.params;
  client.query(
    `SELECT id from backlogs WHERE backlogs.user_id = ${id}`,
    (err, results) => {
      if (err) {
        throw err;
      }
      if (results.rowCount === 0) {
        return res.sendStatus(404);
      } else {
        return res.status(200).json(results.rows);
      }
    }
  );
});

export default routes;
