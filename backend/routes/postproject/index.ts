import { Router } from "express";

import {
  postProjectController,
  getProjectController,
  getProjectByidController,
} from "../../controller";
import { getProjectCeratedByController } from "../../controller/postProject/gteProjectByCreatedBy.controller";
import { deleteProjectController } from "../../controller/postProject/deleteProjectController";
import { updateProjectController } from "../../controller/postProject/deleteProjectController";

export const ProjectRouter = Router();
ProjectRouter.post("/postProject", postProjectController);
ProjectRouter.post("/getAllProject", getProjectController);
ProjectRouter.post("/getProjectById", getProjectByidController);
ProjectRouter.post("/getProjectByCreatedBy", getProjectCeratedByController);
ProjectRouter.post("/deleteProject", deleteProjectController);
ProjectRouter.post("/updateProject", updateProjectController);
