import { Request, Response } from "express";
import { createCategoryQuery } from "../../queries";

export const createCategoryController = async (req: Request, res: Response) => {
  try {
    const result = await createCategoryQuery(req);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
