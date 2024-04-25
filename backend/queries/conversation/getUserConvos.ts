import { Request } from "express";
import { ConversationModel } from "../../models/conversation";

export const getUserConvos = async (req: Request) => {
  const { user } = req.body;

  const convos = await ConversationModel.find({
    participants: { $in: [user] },
  }).populate("participants messages");
  return convos;
};
