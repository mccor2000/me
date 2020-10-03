import { ProjectModel as Project } from '../models';
import { CRUDService } from '../utils';

const feedback = async () => {};

export const ProjectService = {
  ...CRUDService(Project),
  feedback
};
