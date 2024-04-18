import { model, Schema, Model, models } from "mongoose";

export type WorkExpModelType = {
  _id: Schema.Types.ObjectId;
  hiredY: string;
  firedY: string;
  occupation: string;
  companyName: string;
  aboutCompany: string;
};

const WorkExpSchema = new Schema<WorkExpModelType>({
  hiredY: {
    type: String,
    required: true,
  },
  firedY: {
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
  aboutCompany: {
    type: String,
    required: true,
  },
});

export const WorkExpModel: Model<WorkExpModelType> =
  models["WorkExp"] || model("WorkExp", WorkExpSchema);
