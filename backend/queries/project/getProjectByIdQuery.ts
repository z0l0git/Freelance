import { Request } from "express";
import { ProjectModel } from "../../models/project";

export const getProjectByIdQuery = async (req: Request) => {
  const { id } = req.body;
  try {
    const post = await ProjectModel.findById({ _id: id })
      .populate("createdBy", "firstName lastName photoUrl")
      .populate("category")
      .populate("skills");
    return post;
  } catch (err: any) {
    throw new Error(err);
  }
};
