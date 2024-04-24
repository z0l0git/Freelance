import { Request } from "express";
import { ProjectModel } from "../../models/project";

export const getProjectByCreatedByQuery = async (req: Request) => {
  const { createdBy } = req.body;
  try {
    const post = await ProjectModel.find({ createdBy: createdBy })
      .populate("createdBy", "firstName lastName createdAt image")
      .populate("category")
      .populate("skills");
    return post;
  } catch (err: any) {
    throw new Error(err);
  }
};
