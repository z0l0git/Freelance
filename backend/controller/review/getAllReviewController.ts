import { Request, Response } from "express";
import { getAllReviews } from "../../queries/review/getAllReview";

export const getAllReviewsController = async (req: Request, res: Response) => {
  try {
    const result = await getAllReviews(req);
    res.status(200).send(result);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};
