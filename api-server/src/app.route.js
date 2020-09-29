import { Router } from 'express';

const router = Router();

router.use('/', async (_req, res) => {
  res.send('hello world');
});

export default router;
