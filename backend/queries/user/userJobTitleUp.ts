import { Request } from "express";
import { UserModel } from "../../models";

export const jobTitleUp = async (req: Request) => {
  const { id, jobTitle } = req.body;
  try {
    const UpedUser = await UserModel.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          jobTitle: jobTitle,
        },
      },
      {
        new: true,
      }
    );
    return UpedUser
  } catch (err: any) {
    throw new Error(err.message);
  }
};
