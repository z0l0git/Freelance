import { Request } from "express";
import { ConversationModel } from "../../models/conversation";

export const updateConvoQuery = async (req: Request) => {
  const { roomId, participant } = req.body;
  const conversation = await ConversationModel.findOneAndUpdate(
    { roomId: roomId },
    { $push: { participants: participant } }
  );
  return conversation;
};
