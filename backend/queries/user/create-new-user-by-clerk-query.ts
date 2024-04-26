import { Request } from "express";
import { UserModel } from "../../models";
import { tokenGenerate } from "../../utils";

export const CreateNewUserByClerkQuery = async (req: Request) => {
  const { firstName = "", lastName = "", email } = req.body;

  try {
    const newUser = await UserModel.create({
      firstName,
      lastName,
      email,
      auth: "google",
    });
    const token = await tokenGenerate(newUser._id.toString());
    return token;
  } catch (error: any) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
      const existingUser = await UserModel.findOne({ email: email });
      if (existingUser) {
        const token = await tokenGenerate(existingUser._id.toString());
        return token;
      }
      // return { existingUser, message: "User already exists" };
    }
  }
};
