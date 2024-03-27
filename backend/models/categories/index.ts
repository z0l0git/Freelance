import { model, Schema, Model, models } from "mongoose";

export type CategoriesModelType = {
  _id: Schema.Types.ObjectId;
  name: string;
};

const CategoriesSchema = new Schema<CategoriesModelType>({
  name: {
    type: String,
    required: true,
  },
});

export const NameModel: Model<CategoriesModelType> =
  models["Categories"] || model("Categories", CategoriesSchema);
