import { Request, Response } from "express";
import { getConvoQuery } from "../../queries/conversation/get-convo";

export const getConversation = async (req: Request, res: Response) => {
  try {
    const result = await getConvoQuery(req);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
