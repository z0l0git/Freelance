import { Request } from "express";
import { ProjectModel } from "../../models/project";

export const getProjectQuery = async () => {
  try {
    const post = await ProjectModel.find()
      .populate("category")
      .populate("skills");
    return post;
  } catch (err: any) {
    throw new Error(err);
  }
};
