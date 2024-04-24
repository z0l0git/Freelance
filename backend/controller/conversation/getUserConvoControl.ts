import { Request, Response } from "express";
import { getUserConvos } from "../../queries/conversation/getUserConvos";

export const getUserConvosControl = async (req: Request, res: Response) => {
  try {
    const result = await getUserConvos(req);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
