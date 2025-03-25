import express from 'express';
import cors from 'cors';

import { getEnvVar } from './utils/getEnvVar.js';
import {
  getAllQuestionnaires,
  getQuestionnaireByID,
} from './services/questionnaires.js';

const PORT = Number(getEnvVar('PORT', '3000'));

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  //   app.use(
  //     pino({
  //       transport: {
  //         target: 'pino-pretty',
  //       },
  //     }),
  //   );

  //   app.get('/', (req, res) => {
  //     res.json({
  //       message: 'Hello world!',
  //     });
  //   });

  app.get('/', async (req, res) => {
    const questionnaires = await getAllQuestionnaires();

    res.status(200).json({
      data: questionnaires,
    });
  });

  app.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    const questionnaire = await getQuestionnaireByID(id);
    if (!questionnaire) {
      res.status(404).json({
        message: 'Questionnaire not found',
      });
      return;
    }
    res.status(200).json({
      data: questionnaire,
    });
  });
  //   app.use((req, res, next) => {
  //     console.log(`Time: ${new Date().toLocaleString()}`);
  //     next();
  //   });

  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Route not found',
    });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
