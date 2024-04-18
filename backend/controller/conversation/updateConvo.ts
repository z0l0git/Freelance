import { Request, Response } from "express";
import { updateConvoQuery } from "../../queries/conversation/update-convo";

export const updateConversation = async (req: Request, res: Response) => {
  try {
    const result = await updateConvoQuery(req);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
