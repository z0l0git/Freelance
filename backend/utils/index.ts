import bcrypt, { genSaltSync } from "bcrypt";

import jwt from "jsonwebtoken";

export const passwordHash = async (password: string) => {
  const salt = await bcrypt.genSaltSync(1);
  const hashedPassword = await bcrypt.hashSync(password, salt);
  return hashedPassword;
};
export const compareHash = async (passwordHash: string, password: string) => {
  const isPasswordRight = await bcrypt.compareSync(password, passwordHash);
  return isPasswordRight;
};

export const tokenGenerate = async (userId: string) => {
  const token = jwt.sign({ userId }, "secret", { expiresIn: "1d" });
  return token;
};
