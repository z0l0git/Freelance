import { Request, Response } from "express";
import { deleteEducationQuery } from "../../queries";

export const deleteEducationController = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await deleteEducationQuery(req);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
