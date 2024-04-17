import { model, Schema, Model, models } from "mongoose";

export type ReviewsModelType = {
  _id: Schema.Types.ObjectId;
  createdFor: Schema.Types.ObjectId;
  stars: number;
  createdAt: Date;
  description: string;
  createdBy: Schema.Types.ObjectId;
  likes: number;
};

const ReviewsSchema = new Schema<ReviewsModelType>({
  stars: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
  },
  createdFor: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },

  likes: {
    type: Number,
    required: false,
  },
});

export const ReviewsModel: Model<ReviewsModelType> =
  models["Reviews"] || model("Reviews", ReviewsSchema);
