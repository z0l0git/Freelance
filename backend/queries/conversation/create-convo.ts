import { Request } from "express";
import { ConversationModel } from "../../models/conversation";

export const createConvoQuery = async (req: Request) => {
  const { participants } = req.body;
  try {
    const existingConversation = await ConversationModel.findOne({
      participants: { $all: participants },
    });

    if (existingConversation) {
      return { existingConversation };
    } else {
      const generatedId = Math.floor(Math.random() * 1000000)
        .toString()
        .padStart(6, "0");

      const convo = await ConversationModel.create({
        roomId: generatedId.toString(),
        participants,
      });
      return convo;
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};
