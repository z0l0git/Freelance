import { Request } from "express";

import { ProjectModel } from "../../models/project";

export const deleteProjectQuery = async (req: Request) => {
  const { id } = req.body;
  try {
    const project = await ProjectModel.findByIdAndDelete({ _id: id });
    return project;
  } catch (err: any) {
    return err.message;
  }
};
