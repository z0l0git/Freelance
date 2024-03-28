import { model, Schema, Model, models } from "mongoose";

export type WorkExpModelType = {
  _id: Schema.Types.ObjectId;
  year: string;
  occupation: string;
  schoolName: string;
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
  schoolName: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
});

WorkExpSchema.index({ email: 1 }, { unique: true });

export const WorkExpModel: Model<WorkExpModelType> =
  models["WorkExp"] || model("WorkExp", WorkExpSchema);
