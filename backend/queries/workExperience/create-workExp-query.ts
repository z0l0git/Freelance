import { Request } from "express";
import { UserModel, WorkExpModel } from "../../models";

export const createWorkExpQuery = async (req: Request) => {
  const { id, hiredY, firedY, occupation, companyName, aboutCompany } =
    req.body;
  try {
    const result = await WorkExpModel.create({
      hiredY,
      firedY,
      occupation,
      companyName,
      aboutCompany,
    });

    const userU = await UserModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $push: {
          workExp: [result._id],
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
