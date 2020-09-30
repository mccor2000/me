import { Schema, model } from 'mongoose';

export const QnASchema = new Schema(
  {
    question: {
      type: String,
      required: true
    },

    answer: String,

    status: {
      type: String,
      enum: ['PENDING', 'FULLFILLED'],
      default: 'PENDING'
    }
  },
  { timestamps: true }
);

export const QnAModel = model('qna', QnASchema, 'qnas');
