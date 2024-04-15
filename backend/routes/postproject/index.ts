import { Router } from "express";

import {
  postProjectController,
  getProjectController,
  getProjectByidController,
} from "../../controller";

export const ProjectRouter = Router();

ProjectRouter.post("/postProject", postProjectController);
ProjectRouter.get("/getAllProject", getProjectController);
ProjectRouter.post("/getProjectById", getProjectByidController);
