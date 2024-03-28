import { Request, Response } from "express";
import { createUserQuery } from "../../queries";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const result = await createUserQuery(req);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
