import { Request } from "express";
import { ConversationModel } from "../../models/conversation";

export const updateConvoQuery = async (req: Request) => {
  const { roomId, message } = req.body;
  const conversation = await ConversationModel.findOneAndUpdate(
    { roomId: roomId },
    { $push: { messages: message } }
  );
  return conversation;
};
