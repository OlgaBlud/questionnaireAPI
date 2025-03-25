// import { StudentsCollection } from '../db/models/student.js';

// export const getAllStudents = async () => {
//   const students = await StudentsCollection.find();
//   return students;
// };

// export const getStudentById = async (studentId) => {
//   const student = await StudentsCollection.findById(studentId);
//   return student;
// };
import { QuestionnairesCollection } from '../db/models/questionnaires.js';

export const getAllQuestionnaires = async () => {
  const questionnaires = await QuestionnairesCollection.find();
  return questionnaires;
};

export const getQuestionnaireByID = async (id) => {
  const questionnaire = await QuestionnairesCollection.findById(id);
  return questionnaire;
};
