import express from 'express';
import { client } from '../../app';
import { BacklogGame } from 'src/types';

const routes = express.Router();

routes.post('/', async (req, res) => {
  const { name, backlog_id }: BacklogGame = req.body;
  client.query(
    `INSERT INTO backlog_games(name, backlog_id) VALUES ('${name}', ${backlog_id})`,
    (err, results) => {
      if (err) {
        throw err;
      }
      if (results.rowCount === 0) {
        return res.sendStatus(404);
      } else {
        return res.status(201).json({ message: 'Backlog game added' });
      }
    }
  );
});

routes.get('/:id', async (req, res) => {
  const { id } = req.params;
  client.query(
    `SELECT * FROM backlog_games where id = ${id}`,
    (err, results) => {
      if (err) {
        throw err;
      }
      if (results.rowCount === 0) {
        return res.sendStatus(404);
      } else {
        return res.status(200).json(results.rows[0]);
      }
    }
  );
});

routes.delete('/:id', async (req, res) => {
  const { id } = req.params;
  client.query(`DELETE FROM backlog_games where id = ${id}`, (err, results) => {
    if (err) {
      throw err;
    }
    if (results.rowCount === 0) {
      return res.sendStatus(404);
    } else {
      return res.sendStatus(204);
    }
  });
});

export default routes;
