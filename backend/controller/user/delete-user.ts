import { Request, Response } from "express";
import { deleteUserQuery } from "../../queries";

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const result = await deleteUserQuery(req);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
