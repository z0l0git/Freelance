import { Request, Response } from "express";
import { getProjectByCreatedByQuery } from "../../queries/project/getProjectBYCreatedBy";

export const getProjectCeratedByController = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await getProjectByCreatedByQuery(req);
    res.status(200).send(result);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};