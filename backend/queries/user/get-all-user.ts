import { UserModel } from "../../models";

export const getAllUserQuery = async () => {
  const allUser = await UserModel.find().populate("education workExp skills");
  return allUser;
};
