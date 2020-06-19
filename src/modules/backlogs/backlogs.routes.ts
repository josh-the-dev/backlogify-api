import express from 'express';
import { client } from '../../app';
import { Backlog } from 'src/types';

const routes = express.Router();

routes.post('/', async (req, res) => {
  const { name, order = 0 }: Backlog = req.body;
  console.log(
    `INSERT INTO backlogs(name, backlog_order) VALUES ('${name}', ${order})`
  );
  client.query(
    `INSERT INTO backlogs(name, backlog_order) VALUES ('${name}', ${order})`,
    (err, results) => {
      if (err) {
        throw err;
      }
      if (results.rowCount === 0) {
        return res.sendStatus(404);
      } else {
        return res.status(201).json({ message: 'Backlog added' });
      }
    }
  );
});

routes.get('/:id', async (req, res) => {
  const { id } = req.params;
  client.query(
    `SELECT backlogs.name , backlog_games.name as game_name, backlogs.backlog_order FROM backlogs LEFT JOIN backlog_games ON backlog_games.backlog_id = backlogs.id WHERE backlogs.id = ${id}`,
    (err, results) => {
      if (err) {
        throw err;
      }
      if (results.rowCount === 0) {
        return res.sendStatus(404);
      } else {
        const backlog: Backlog = {
          name: results.rows[0].name,
          games: results.rows.map(backlogGame => {
            return { name: backlogGame.game_name };
          }),
          order: results.rows[0].backlog_order,
        };

        return res.status(200).json(backlog);
      }
    }
  );
});

routes.delete('/:id', async (req, res) => {
  const { id } = req.params;
  client.query(`DELETE FROM backlogs where id = ${id}`, (err, results) => {
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
