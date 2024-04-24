import { Request, Response } from "express";
import { deleteProjectQuery } from "../../queries/project/deleteProjectQuery";
import { updateProjectQuery } from "../../queries/project/updatePostQuery";

export const deleteProjectController = async (req: Request, res: Response) => {
  try {
    const result = await deleteProjectQuery(req);
    res.status(200).send(result);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};

export const updateProjectController = async (req: Request, res: Response) => {
  try {
    const result1 = await updateProjectQuery(req);
    res.status(200).send(result1);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};
