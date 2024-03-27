import { model, Schema, Model, models } from "mongoose";

export type ReviewsModelType = {
  _id: Schema.Types.ObjectId;
  stars: number;
  createdAd: Date;
  description: string;
  likes: number;
};

const ReviewsSchema = new Schema<ReviewsModelType>({
  stars: {
    type: Number,
    required: true,
  },
  createdAd: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: false
  },
});

export const ReviewsModel: Model<ReviewsModelType> =
  models["Reviews"] || model("Reviews", ReviewsSchema);
