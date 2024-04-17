import { Request, Response } from "express";
import { ReviewPostQuery } from "../../queries";

export const postReviewController = async (req: Request, res: Response) => {
  try {
    const result = await ReviewPostQuery(req);
    res.status(200).send(result);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};
