import { Request, Response } from "express";
import { createMessageQuery } from "../../queries/message/create-message";

export const createMessage = async (req: Request, res: Response) => {
  try {
    const result = await createMessageQuery(req);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
