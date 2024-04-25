import { Request } from "express";
import { EducationModel, WorkExpModel } from "../../models";

export const updateWorkExpQuery = async (req: Request) => {
  const { _id, hiredY, firedY, occupation, companyName, aboutCompany } =
    req.body;


  try {
    const upedEdu = await WorkExpModel.findByIdAndUpdate(
      {
        _id: _id,
      },
      {
        $set: {
          hiredY: hiredY,
          firedY: firedY,
          occupation: occupation,
          companyName: companyName,
          aboutCompany: aboutCompany,
        },
      },
      { new: true }
    );
    return upedEdu;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
