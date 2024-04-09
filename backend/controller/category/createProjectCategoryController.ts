import { Request, Response } from "express";
import { createProjectCategory } from "../../queries";

export const createProjectCategoryController = async (req: Request, res: Response) => {
    try {
      const result = await createProjectCategory(req);
      res.status(200).send(result);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
  
