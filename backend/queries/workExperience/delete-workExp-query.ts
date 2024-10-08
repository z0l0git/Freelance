import { Request } from "express";
import { WorkExpModel } from "../../models";

export const deleteWorkExpQuery = async (req: Request) => {
  const { id } = req.body;


  const workExp = await WorkExpModel.findByIdAndDelete({ _id: id });

  if (!workExp) {
    throw new Error("undifined");
  }
  return workExp;
};
