import { Request, Response } from "express";
import { deleteCategoryQuery } from "../../queries";

export const deleteCategoryController = async (req: Request, res: Response) => {
  try {
    const result = await deleteCategoryQuery(req);

    res.status(200).send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
