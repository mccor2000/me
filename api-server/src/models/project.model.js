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

    tree: Object
  },
  { timestamps: true }
);

export const ProjectModel = model('project', ProjectSchema, 'projects');
