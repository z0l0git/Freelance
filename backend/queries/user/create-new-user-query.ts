// firstName: string;
// lastName: string;
// email: string;
// phone: string;
// password: string;

import { Request } from "express";
import {  UserModel } from "../../models";

export const createUserQuery = async (req: Request) => {
  const { firstName, lastName, email, phone, password } = req.body;

  try {
    const user = await UserModel.create({
      firstName,
      lastName,
      email,
      phone,
      password,
    });

    return user;
  } catch (error: any) {
    return error.message;
  }
};
