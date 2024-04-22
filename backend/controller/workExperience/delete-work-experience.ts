import { Request, Response } from "express";
import { deleteWorkExpQuery } from "../../queries";

export const deleteWorkExpController = async (req: Request, res: Response) => {
  try {
    const result = await deleteWorkExpQuery(req);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
