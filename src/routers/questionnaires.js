import { Router } from 'express';
import {
  getAllQuestionnairesController,
  getQuestionnaireByIDController,
} from '../controllers/questionnaires.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/questionnaires', ctrlWrapper(getAllQuestionnairesController));

router.get('/questionnaires/:id', ctrlWrapper(getQuestionnaireByIDController));

export default router;
