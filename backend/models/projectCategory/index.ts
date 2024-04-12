import { model, Schema, Model, models } from "mongoose";

export type ProjectCategoryModelType = {
  _id: Schema.Types.ObjectId;
  name: string;
  description: string;
};

const ProjectCategorySchema = new Schema<ProjectCategoryModelType>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const ProjectCategory: Model<ProjectCategoryModelType> =
  models["ProjectCategory"] || model("ProjectCategory", ProjectCategorySchema);
