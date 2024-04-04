import { Request } from "express";
import { UserModel } from "../../models";

export const updateUserQuery = async (req: Request) => {
  const { id, jobTitle, location, socials, description, languages, skills } =
    req.body;

  try {
    const user = await UserModel.findByIdAndUpdate(
      { _id: id },
      {
        jobTitle,
        location,
        socials,
        description,
        languages,
        skills,
      },
      { new: true }
    );

    return user;
  } catch (error: any) {
    return error.message;
  }
};
