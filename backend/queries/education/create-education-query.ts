import { Request } from "express";
import { EducationModel, UserModel } from "../../models";

export const createEducationQuery = async (req: Request) => {
  const {
    id,
    startedY,
    profession,
    finishedY,
    degree,
    schoolName,
    aboutSchool,
  } = req.body;
  try {
    const result = await EducationModel.create({
      startedY,
      profession,
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

    const allUser = await UserModel.findById({ _id: id }).populate(
      "education workExp skills"
    );
    return allUser;
  } catch (error: any) {
    return error.message;
  }
};
