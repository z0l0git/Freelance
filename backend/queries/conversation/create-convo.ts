import { Request } from "express";
import { ConversationModel } from "../../models/conversation";

export const createConvoQuery = async (req: Request) => {
  const { roomId } = req.body;
  try {
    const convo = await ConversationModel.create({
      roomId,
    });
    return convo;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
