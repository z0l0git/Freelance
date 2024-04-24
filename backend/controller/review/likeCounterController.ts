import { Request, Response } from "express";
import { likeCounter } from "../../queries/review/likeCounter";

export const likeCounterController = async (req: Request, res: Response) => {
  try {
    const result = await likeCounter(req);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(400).send(error.message || "Something went wrong");
  }
};
