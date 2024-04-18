import { Request } from "express";
import { ConversationModel } from "../../models/conversation";

export const getConvoQuery = async (req: Request) => {
  const { roomId } = req.body;
  const conversation = await ConversationModel.findOne({ roomId }).populate(
    "messages"
  );
  return conversation;
};
