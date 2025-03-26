import {
  getAllQuestionnaires,
  getQuestionnaireByID,
} from '../services/questionnaires.js';
import mongoose from 'mongoose';
import createHttpError from 'http-errors';

export const getAllQuestionnairesController = async (req, res) => {
  const questionnaires = await getAllQuestionnaires();
  res.json({
    status: 200,
    message: 'Successfully found questionnaires!',
    data: questionnaires,
  });
};

export const getQuestionnaireByIDController = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw createHttpError(404, 'Questionnaire not found');
  }
  const questionnaire = await getQuestionnaireByID(id);

  if (!questionnaire) {
    throw createHttpError(404, 'Questionnaire not found');
  }
  res.json({
    status: 200,
    message: `Successfully found questionnaire with id ${id}!`,
    data: questionnaire,
  });
};
