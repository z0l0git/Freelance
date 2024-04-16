import { UserModel } from "../../models";

export const getAllUserQuery = async () => {
  const allUser = await UserModel.find()
    .populate("skills")
    .populate("education")
    .populate("workExp");
  return allUser;
};
