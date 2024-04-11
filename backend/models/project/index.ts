import { model, Schema, Model, models } from "mongoose";

export type ProjectModelType = {
  _id: Schema.Types.ObjectId;
  createdBy: Schema.Types.ObjectId;
  title: string;
  description: string;
  files: [string];
  category: [Schema.Types.ObjectId];
  skills: [Schema.Types.ObjectId];
  budget: string;
  deliveryTime: string;
  flexible: boolean;
  createdAt: Date;
};

const ProjectSchema = new Schema<ProjectModelType>({
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  files: {
    type: [String],
    required: false,
  },
  category: {
    type: [Schema.Types.ObjectId],
    ref: "ProjectCategory",
  },
  skills: {
    type: [Schema.Types.ObjectId],
    ref: "Categories",
  },
  budget: {
    type: String,
    required: true,
  },
  deliveryTime: {
    type: String,
    required: true,
  },
  flexible: {
    type: Boolean,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const ProjectModel: Model<ProjectModelType> =
  models["Project"] || model("Project", ProjectSchema);
