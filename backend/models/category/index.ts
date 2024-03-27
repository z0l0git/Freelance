import { model, Schema, Model, models } from "mongoose";

export type CategoryModelType = {
  _id: Schema.Types.ObjectId;
  name: string;
};

const CategorySchema = new Schema<CategoryModelType>({
  name: {
    type: String,
    required: true,
  },
});

export const CategoryModel: Model<CategoryModelType> =
  models["Categories"] || model("Categories", CategorySchema);
