import { model, Schema, Model, models } from "mongoose";

export type ConversationModelType = {
  _id: Schema.Types.ObjectId;
  roomId: string;
  messages?: Schema.Types.ObjectId[];
};

const ConversationSchema = new Schema<ConversationModelType>({
  roomId: {
    type: String,
    required: true,
  },
  messages: {
    type: [Schema.Types.ObjectId],
    ref: "Message",
  },
});

export const ConversationModel: Model<ConversationModelType> =
  models["Conversation"] || model("Conversation", ConversationSchema);
