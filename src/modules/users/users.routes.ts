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

export default routes;
