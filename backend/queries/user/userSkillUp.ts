import { Request } from "express";
import { UserModel } from "../../models";

export const userSkillUp = async (req: Request) => {
  const { id, skills } = req.body;
  
  try {
    const UpedUser = await UserModel.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          skills: skills,
        },
      },
      {
        new: true,
      }
    );
    return UpedUser;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
