import { QnAService } from '../services';
import { wrapper } from '../utils';

export const getAllQnAs = wrapper(async (req, res) => {
  const QnAs = await QnAService.getMany();

  res.json({ data: QnAs });
});

export const addQnA = wrapper(async (req, res) => {
  const QnA = await QnAService.createOne(req.body);

  res.json({ data: QnA });
});

export const updateQnA = wrapper(async (req, res) => {
  const updatedQnA = await QnAService.updateOne(req.params.id, req.body);

  res.json({ data: updatedQnA });
});
