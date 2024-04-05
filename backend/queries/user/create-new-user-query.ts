// firstName: string;
// lastName: string;
// email: string;
// phone: string;
// password: string;

import { Request } from "express";
import { UserModel } from "../../models";
import { passwordHash } from "../../utils";

export const createUserQuery = async (req: Request) => {
  const { firstName, lastName, email, phone, password } = req.body;
  console.log(firstName);

  const hash = await passwordHash(password);

  try {
    const user = await UserModel.create({
      firstName,
      lastName,
      email,
      phone,
      password: hash,
    });

    return user;
  } catch (error: any) {
    return error.message;
  }
};
