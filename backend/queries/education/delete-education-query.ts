import { Request } from "express";
import { EducationModel } from "../../models";

export const deleteEducationQuery = async (req: Request) => {
  const { id } = req.body;

  const result = await EducationModel.findByIdAndDelete({ _id: id });

  if (!result) {
    throw new Error("not found");
  }
  return "success";
};
