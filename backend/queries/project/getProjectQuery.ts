import { Request } from "express";
import { ProjectModel } from "../../models/project";

export const getProjectQuery = async (req: Request) => {
  const { filter = {} } = req.body;
  try {
    const post = await ProjectModel.find(filter)
      .populate("createdBy", "firstName lastName photoUrl")
      .populate("category")
      .populate("skills");
    return post;
  } catch (err: any) {
    throw new Error(err);
  }
};
