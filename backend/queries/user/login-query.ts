import { Request } from "express";
import { UserModel } from "../../models";
import { compareHash, tokenGenerate } from "../../utils";

const getByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email: email });
  return user;
};

export const loginQuery = async (req: Request) => {
  const { email, password } = req.body;
  try {
    const user = await getByEmail(email);

    if (!user) {
      throw new Error("User or Password not match");
    }

    const isPasswordRight = await compareHash(user.password, password);
    console.log(isPasswordRight);

    if (!isPasswordRight) {
      throw new Error("User or Password not match");
    } else {
      const token = await tokenGenerate(user._id.toString());

      return token;
    }
  } catch (err: any) {
    throw new Error(err.message);
  }
};
