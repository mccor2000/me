import { ProjectService } from '../services';
import { wrapper } from '../utils';

export const getAllProjects = wrapper(async (req, res) => {
  const projects = await ProjectService.getMany();

  res.json({ data: projects });
});

export const createProject = wrapper(async (req, res) => {
  const project = await ProjectService.createOne(req.body);

  res.json({ data: project });
});

export const getProject = wrapper(async (req, res) => {
  const project = await ProjectService.getOne(req.params.id);

  res.json({ data: project });
});

export const updateProject = wrapper(async (req, res) => {
  const updatedProject = await ProjectService.updateOne(
    req.params.id,
    req.body
  );

  res.json({ data: updatedProject });
});

export const deleteProject = wrapper(async (req, res) => {
  const removedProject = await ProjectService.deleteOne(req.params.id);

  res.json({ data: removedProject });
});

export const feedback = wrapper(async (req, res) => {
  const feedback = await ProjectService.feedback(req.params.id, req.body);

  res.json({ data: feedback });
});
