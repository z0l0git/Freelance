import { model, Schema, Model, models } from "mongoose";

export type EducationModelType = {
  _id: Schema.Types.ObjectId;
  year: string;
  degree: string;
  schoolName: string;
  about: string;
};

const EducationSchema = new Schema<EducationModelType>({
  year: {
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
  about: {
    type: String,
    required: true,
  },
});

export const EducationModel: Model<EducationModelType> =
  models["Education"] || model("Education", EducationSchema);
