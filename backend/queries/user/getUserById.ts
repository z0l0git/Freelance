import { Request } from "express";
import { UserModel } from "../../models";

export const getUserByIdQuery = async (req: Request) => {
  const { id } = req.body;
  const allUser = await UserModel.findById({ _id: id }).populate(
    "education workExp skills"
  );
  return allUser;
};
