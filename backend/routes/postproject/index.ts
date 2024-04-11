import { Router } from "express";

import { postProjectController, getProjectController } from "../../controller";

export const ProjectRouter = Router();

ProjectRouter.post("/postProject", postProjectController);
ProjectRouter.get("/getAllProject", getProjectController);
