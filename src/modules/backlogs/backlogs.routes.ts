import express from 'express';
import { client } from '../../app';

const routes = express.Router();

client.connect();

routes.get('/:id', async (req, res) => {
  const { id } = req.params;
  client.query(`SELECT * FROM backlogs where id = ${id}`, (err, results) => {
    if (err) {
      throw err;
    }
    if (results.rowCount === 0) {
      return res.sendStatus(404);
    } else {
      return res.status(200).json(results.rows);
    }
  });
});

export default routes;
