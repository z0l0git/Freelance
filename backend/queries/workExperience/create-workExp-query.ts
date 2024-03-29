import { Request } from "express";
import { WorkExpModel } from "../../models";

export const createWorkExpQuery = async (req: Request) => {
  const { year, occupation, companyName, about } = req.body;

  const workExp = await WorkExpModel.create({
    year,
    occupation,
    companyName,
    about,
  });
  return workExp;
};
