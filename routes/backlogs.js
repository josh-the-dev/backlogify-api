import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  return res.send(req.context.models.backlogs);
});

router.get('/:backlogId', (req, res) => {
    return res.send(req.context.models.backlogs[req.params.backlogId])
})

export default router;