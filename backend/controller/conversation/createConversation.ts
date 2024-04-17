import { Request, Response } from "express";
import { createConvoQuery } from "../../queries/conversation/create-convo";

export const createConversation = async (req: Request, res: Response) => {
  try {
    const result = await createConvoQuery(req);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
