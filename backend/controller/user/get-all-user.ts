import { Response, Request } from "express";
import { getAllUserQuery } from "../../queries";

export const getAllUserController = async (req: Request, res: Response) => {
  try {
    const result = await getAllUserQuery();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

import { getUserByIdQuery } from "../../queries/user/getUserById";

export const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const result = await getUserByIdQuery(req);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};
