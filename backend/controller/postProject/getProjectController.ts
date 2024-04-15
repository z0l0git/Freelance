import { Request, Response } from "express";
import { getProjectQuery, getProjectByIdQuery } from "../../queries";

export const getProjectController = async (req: Request, res: Response) => {
  try {
    const result = await getProjectQuery(req);
    res.status(200).send(result);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};

export const getProjectByidController = async (req: Request, res: Response) => {
  try {
    const result1 = await getProjectByIdQuery(req);
    res.status(200).send(result1);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};
