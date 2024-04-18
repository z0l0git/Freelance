import { model, Schema, Model, models } from "mongoose";

export type EducationModelType = {
  _id: Schema.Types.ObjectId;
  startedY: string;
  finishedY: string;
  degree: string;
  schoolName: string;
  aboutSchool: string;
};

const EducationSchema = new Schema<EducationModelType>({
  startedY: {
    type: String,
    required: true,
  },
  finishedY: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  schoolName: {
    type: String,
    required: true,
  },
  aboutSchool: {
    type: String,
    required: true,
  },
});

export const EducationModel: Model<EducationModelType> =
  models["Education"] || model("Education", EducationSchema);
