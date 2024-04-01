import { Request, Response } from "express";
import { createEducationQuery } from "../../queries";

export const createEducationController = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await createEducationQuery(req);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
