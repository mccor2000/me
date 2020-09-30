import { ProjectModel as Project } from '../models';
import { CRUDService } from '../utils';

export const ProjectService = CRUDService(Project);
