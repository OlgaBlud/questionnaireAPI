import { model, Schema } from 'mongoose';
const questionSchema = new Schema({
  type: {
    type: String,
    enum: ['text', 'single_choice', 'multiple_choice'],
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  options: {
    type: [String], // Варианты ответа (только для radio и checkbox)
    required: function () {
      return this.type !== 'text'; // Обязательны, если не text
    },
  },
});
const questionnairesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    questionsCount: {
      type: Number,
      default: 0,
      required: true,
    },
    completions: {
      type: Number,
      default: 0,
      required: true,
    },

    questions: {
      type: [questionSchema],
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const QuestionnairesCollection = model(
  'questionnaires',
  questionnairesSchema,
);
