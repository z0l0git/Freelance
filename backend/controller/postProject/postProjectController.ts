import { Request, Response } from "express";
import { createProjectQuery } from "../../queries";

export const postProjectController = async (req: Request, res: Response) => {
  try {
    const result = await createProjectQuery(req);
    res.status(200).send(result);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};
