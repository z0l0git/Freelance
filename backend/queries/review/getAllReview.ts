import { Request } from "express";
import { ReviewsModel } from "../../models";

export const getAllReviews = async (req: Request) => {
  const { createdFor } = req.body;

  try {
    const getAllReviews = await ReviewsModel.find({
      createdFor: createdFor,
    }).populate("createdBy", "firstName lastName email photoUrl jobTitle");
    console.log(getAllReviews);
    return getAllReviews;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
