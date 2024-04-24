import { Request, Response } from "express";
import { createConvoQuery } from "../../queries/conversation/create-convo";
import { ConversationModelType } from "../../models/conversation";

type CreateConversationType = { existingConversation: ConversationModelType };

export const createConversation = async (req: Request, res: Response) => {
  try {
    const result = (await createConvoQuery(req)) as
      | CreateConversationType
      | ConversationModelType;

    if (Object(result).existingConversation) {
      return res.status(200).send(Object(result).existingConversation);
    } else {
      console.log(result);
      res.status(200).send(result);
    }
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
