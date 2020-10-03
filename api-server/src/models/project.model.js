import { Schema, model } from 'mongoose';

export const ProjectSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    githubUrl: {
      type: String,
      required: true
    },

    feedback: [
      {
        name: {
          type: String,
          required: true
        },
        title: {
          type: String,
          required: true
        },
        detail: {
          type: String,
          required: true
        }
      }
    ]
  },
  { timestamps: true }
);

export const ProjectModel = model('project', ProjectSchema, 'projects');
