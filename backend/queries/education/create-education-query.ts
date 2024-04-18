import { Request } from "express";
import { EducationModel, UserModel } from "../../models";

export const createEducationQuery = async (req: Request) => {
  const { id, startedY, finishedY, degree, schoolName, aboutSchool } = req.body;
  try {
    const result = await EducationModel.create({
      startedY,
      finishedY,
      degree,
      schoolName,
      aboutSchool,
    });

    const userU = await UserModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $push: {
          education: [result._id],
        },
      },
      {
        new: true,
      }
    );
    return userU;
  } catch (error: any) {
    return error.message;
  }
};
