import { Request, Response } from "express";
import { createWorkExpQuery } from "../../queries";

export const createWorkExpController = async (req: Request, res: Response) => {
  try {
    const result = await createWorkExpQuery(req);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
