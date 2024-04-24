import { ReviewsModel } from "../../models";
import { Request } from "express";

export const likeCounter = async (req: Request) => {
  const { createdFor } = req.params;
  console.log(createdFor);

  try {
    const LikeCount = await ReviewsModel.findOneAndUpdate(
      {
        createdFor: createdFor,
      }
      // {
      //   likes: {
      //     $dec: 1,
      //   },
      // },
      // { new: true }
    ).populate("createdBy", "likes");
    return LikeCount;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
