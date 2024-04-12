import { Request } from "express";
import { ProjectCategory } from "../../models/projectCategory";

export const createProjectCategory = async (req: Request) => {
  const { name, description } = req.body;
  try {
    const projectCtaegory = await ProjectCategory.create({
      name,
      description,
    });
    return projectCtaegory;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
