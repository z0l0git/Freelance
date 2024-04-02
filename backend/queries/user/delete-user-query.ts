import { Request } from "express";
import { UserModel } from "../../models";

export const deleteUserQuery = async (req: Request) => {
  const { email } = req.body;

  try {
    const user = await UserModel.findOneAndDelete({ email: email });

    if (!user) {
      throw new Error("user not match");
    }
    return "success";
  } catch (error: any) {
    return error.message;
  }
};
