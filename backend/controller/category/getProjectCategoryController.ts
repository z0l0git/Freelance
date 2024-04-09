import { Request, Response } from "express";

import { getProjectCategorytQuery } from "../../queries/projectCategory";

export const getProjectControlller = async (req: Request, res: Response) => {
  try {
    const result = await getProjectCategorytQuery();
    res.send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
