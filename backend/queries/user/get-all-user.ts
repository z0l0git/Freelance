import { ReviewsModel, UserModel } from "../../models";
import { Request } from "express";

export const getAllUserQuery = async (req: Request) => {
  const { filter = {} } = req.body;
  const allUser = await UserModel.find(filter).populate(
    "education workExp skills"
  );

  const newData = await Promise.all(
    allUser.map(async (el) => {
      const eachReview = await ReviewsModel.find({ createdFor: el._id });

      if (!eachReview.length) {
        return { ...el, rating: 0, howManyPeople: 0 };
      }

      const sumWithInitial = eachReview.reduce(
        (accumulator, currentValue) => accumulator + currentValue.stars,
        0
      );
      const average = sumWithInitial / eachReview.length;
      const roundedAverage: number = Number(average.toFixed(1));
      return {
        ...el,
        rating: roundedAverage,
        howManyPeople: eachReview.length,
      };
    })
  );

  return newData;
};
