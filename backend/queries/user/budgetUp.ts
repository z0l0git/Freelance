import { Request } from "express";
import { UserModel } from "../../models";

export const budgetUp = async (req: Request) => {
  const { id, budget } = req.body;
  try {
    const UpedUser = await UserModel.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          budget: budget,
        },
      },
      {
        new: true,
      }
    );
    return UpedUser;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
