import { Request } from "express";
import { CategoryModel } from "../../models";

export const createCategoryQuery = async (req: Request) => {
  const { name } = req.body;

  const result = await CategoryModel.create({
    name,
  });
  return result;
};
