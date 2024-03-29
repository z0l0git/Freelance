import { Request, Response } from "express";
import { CategoryModel } from "../../models";

export const deleteCategoryQuery = async (req: Request) => {
  const { id } = req.body;

  const result = await CategoryModel.findByIdAndDelete({ _id: id });

  if (!result) {
    throw new Error("User not found");
  }

  return "Success";
};
