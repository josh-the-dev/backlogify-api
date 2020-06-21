import express from 'express';
import { client } from '../../app';
import { User, Backlog, BacklogGame } from 'src/types';

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
  const backlogsResults = await client.query(
    `SELECT id, name, backlog_order from backlogs WHERE backlogs.user_id = ${id}`
  );
  if (backlogsResults.rowCount === 0) {
    return res.sendStatus(404);
  } else {
    let userBacklogs: Backlog[] = backlogsResults.rows;
    let backlogGames: BacklogGame[] = [];
    userBacklogs.map(backlog => {
      backlog.games = [];
    });

    const getUserBacklogGames = async () => {
      const userBacklogPromises = userBacklogs.map(async backlog => {
        const backlogGamesResult = await client.query(
          `SELECT * FROM backlog_games where backlog_id = ${backlog.id}`
        );
        backlogGames = backlogGamesResult.rows;
      });
      await Promise.all(userBacklogPromises);
    };

    await getUserBacklogGames();
    backlogGames.forEach(backlogGame => {
      const relatedBacklogIndex = userBacklogs.findIndex(
        backlog => backlog.id === backlogGame.backlog_id
      );
      userBacklogs[relatedBacklogIndex].games.push(backlogGame);
    });

    return res.status(200).json(userBacklogs);
  }
});

export default routes;
