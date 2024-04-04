import { model, Schema, Model, models } from "mongoose";

export type WorkExpModelType = {
  _id: Schema.Types.ObjectId;
  year: string;
  occupation: string;
  companyName: string;
  about: string;
};

const WorkExpSchema = new Schema<WorkExpModelType>({
  year: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
});

export const WorkExpModel: Model<WorkExpModelType> =
  models["WorkExp"] || model("WorkExp", WorkExpSchema);
