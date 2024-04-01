import { Request } from "express";
import { EducationModel } from "../../models";

export const updateEducationQuery = async (req: Request) => {
  const { id, year, degree, schoolName, about } = req.body;

  try {
    const education = await EducationModel.findById({ _id: id });
    console.log(education);

    if (!education) {
      throw new Error("blaavgai");
    }

    const updatedEducation = await EducationModel.updateOne(
      { _id: id },
      { $set: { year, degree, schoolName, about } }
    );
    console.log(updatedEducation);

    return updatedEducation;
  } catch (error: any) {
    return "unsuccessful";
  }
};
