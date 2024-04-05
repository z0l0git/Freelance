import { Request, Response } from "express";
import { CreateNewUserByClerkQuery } from "../../queries";

export const createUserByClerkController = async (
  req: Request,
  res: Response
) => {
  try {
    const result1 = await CreateNewUserByClerkQuery(req);
    res.status(200).send(result1);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
