import { Request } from "express";
import { ProjectModel } from "../../models/project";

export const createProjectQuery = async (req: Request) => {
  const {
    createdBy,
    title,
    description,
    budget,
    deliveryTime,
    flexible,
    categorys,
    skillss,
  } = req.body;
  try {
    const project = await ProjectModel.create({
      title,
      description,
      budget,
      deliveryTime,
      createdBy,

      category: [...categorys],
      skills: [...skillss],
      flexible,
    });
    return project;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
