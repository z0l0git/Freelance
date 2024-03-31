import { Request, Response } from "express";
import { updateWorkExpQuery } from "../../queries";

export const updateWorkExpController = async (req: Request, res: Response) => {
  try {
    const result = await updateWorkExpQuery(req);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
