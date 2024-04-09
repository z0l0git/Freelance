import { UserModel } from "../../models";

export const getAllUserQuery = async () => {
  const allUser = await UserModel.find();
  return allUser;
};
