import { Request } from "express";
import { MessageModel } from "../../models/message";

export const createMessageQuery = async (req: Request) => {
  const { message, author, time } = req.body;
  try {
    const msg = await MessageModel.create({
      message,
      author,
      time,
    });
    return msg;
  } catch (err: any) {
    throw new Error(err.msg);
  }
};
