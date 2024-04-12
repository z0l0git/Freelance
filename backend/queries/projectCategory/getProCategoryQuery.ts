import { Request } from "express";

import { ProjectCategory } from "../../models/projectCategory";

export const getProjectCategorytQuery = async () => {
  try {
    const post = await ProjectCategory.find();

    return post;
  } catch (err: any) {
    throw new Error(err);
  }
};
