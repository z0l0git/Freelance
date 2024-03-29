import { Request, Response } from "express";
import { updateEducationQuery } from "../../queries";

export const updateEducationController = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await updateEducationQuery(req);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
