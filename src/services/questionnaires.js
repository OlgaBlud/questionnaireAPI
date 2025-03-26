import { QuestionnairesCollection } from '../db/models/questionnaires.js';

export const getAllQuestionnaires = async () => {
  const questionnaires = await QuestionnairesCollection.find();
  return questionnaires;
};

export const getQuestionnaireByID = async (id) => {
  const questionnaire = await QuestionnairesCollection.findById(id);
  return questionnaire;
};
