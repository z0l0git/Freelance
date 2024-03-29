import { Request, Response } from "express";
import { loginQuery } from "../../queries/user/login-query";

export const loginController = async (req: Request, res: Response) => {
  try {
    const result = await loginQuery(req);
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
