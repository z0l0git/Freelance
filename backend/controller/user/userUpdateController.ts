import { Request, Response } from "express";
import upUserSj from "../../queries/user/updateUser";

export const upUserSjController = async (req: Request, res: Response) => {
  try {
    const result1 = await upUserSj(req);
    res.send(result1);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
