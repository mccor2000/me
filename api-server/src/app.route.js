import { Router } from 'express';
import {
  getAllProjects,
  getProject,
  addProject,
  updateProject,
  deleteProject,
  getFile,
  comment,
  feedback,
  getAllQnAs,
  addQnA,
  updateQnA
} from './controllers';

const router = Router();

router.use('/hello', async (_req, res) => {
  res.send('hello world');
});

router.route('/projects').get(getAllProjects).post(addProject);
router
  .route('/projects/:id')
  .get(getProject)
  .put(updateProject)
  .delete(deleteProject);
router.route('/projects/:id/feedback').post(feedback);
router.route('/projects/:id/file/:id').get(getFile);
router.route('/projects/:id/file/:id/comment').post(comment);

router.route('/qna').get(getAllQnAs).post(addQnA);
router.route('/qna/:id').put(updateQnA);

export default router;
