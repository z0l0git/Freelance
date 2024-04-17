import { model, Schema, Model, models } from "mongoose";

export type MessageModelType = {
  _id: Schema.Types.ObjectId;
  message: string;
  author: string;
  time: string;
};

const MessageSchema = new Schema<MessageModelType>({
  message: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    ref: "User",
  },
  time: {
    type: String,
    required: true,
  },
});

export const MessageModel: Model<MessageModelType> =
  models["Message"] || model("Message", MessageSchema);
