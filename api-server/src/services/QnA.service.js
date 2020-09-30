import { QnAModel as QnA } from '../models';
import { CRUDService } from '../utils';

export const QnAService = CRUDService(QnA);
