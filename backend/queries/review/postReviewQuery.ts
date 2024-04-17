import { Request } from "express";
import { ReviewsModel } from "../../models/reviews";
import { UserModel } from "../../models";

export const ReviewPostQuery = async (req: Request) => {
  const { stars, description, createdBy, createdFor } = req.body;

  try {
    const postReview = await ReviewsModel.create({
      stars,
      description,
      createdBy,
      createdFor,
    });
    console.log(postReview);
    return postReview;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
