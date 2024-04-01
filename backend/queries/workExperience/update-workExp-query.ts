import { Request } from "express";
import { WorkExpModel } from "../../models";

export const updateWorkExpQuery = async (req: Request) => {
  const { id, year, occupation, companyName, about } = req.body;

  try {
    const workExp = await WorkExpModel.findById({ _id: id });

    if (!workExp) {
      throw new Error("blaavgai");
    }

    const updatedWorkExp = await WorkExpModel.updateOne(
      { _id: id },
      { $set: { year, occupation, companyName, about } }
    );

    return updatedWorkExp;
  } catch (error: any) {
    return "unsuccessful";
  }
};
