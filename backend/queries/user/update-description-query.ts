import { Request } from "express";
import { UserModel } from "../../models";

export const updateUserDescriptionQuery = async (req: Request) => {
  const { id, description } = req.body;
  try {
  } catch (err: any) {
    return err.message;
  }
};
