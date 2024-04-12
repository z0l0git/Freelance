import { Request, Response } from "express";
import { getProjectQuery } from "../../queries";

export const getProjectController = async (req: Request, res: Response) => {
  try {
    const result = await getProjectQuery();
    res.status(200).send(result);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};
