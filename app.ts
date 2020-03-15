import path from 'path';
import express from 'express';
import backlogs from './modules/backlogs/backlogs.routes';
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, './public');

app.use(express.static(publicPath));

app.use('/backlogs', backlogs);

app.get('*', (_req: any, res: { sendFile: (arg0: any) => void }) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
