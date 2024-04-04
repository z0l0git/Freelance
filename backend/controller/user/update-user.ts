import { Request, Response } from "express";
import { updateUserQuery } from "../../queries/user/update-user-query";

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const result = await updateUserQuery(req);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
