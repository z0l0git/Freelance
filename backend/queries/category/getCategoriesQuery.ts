import { CategoryModel } from "../../models";

export const getCategoryQuery = async () => {
  const categories = CategoryModel.find();

  const newCategories = (await categories).map((item) => {
    return { name: item.name, id: item._id };
  });
  return newCategories;
};
