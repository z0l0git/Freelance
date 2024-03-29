import { Request } from "express";
import { EducationModel } from "../../models";

export const createEducationQuery = async (req: Request) => {
  const { year, degree, schoolName, about } = req.body;
  try {
    const education = EducationModel.create({
      year,
      degree,
      schoolName,
      about,
    });
    return education;
  } catch (error: any) {
    return error.message;
  }
};
