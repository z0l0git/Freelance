import { Router } from "express";
import {
  createWorkExpController,
  updateWorkExpController,
} from "../../controller";
import { deleteWorkExpController } from "../../controller/workExperience/delete-work-experience";

export const WorkExperienceRouter = Router();

WorkExperienceRouter.post("/createWorkExp", createWorkExpController);
WorkExperienceRouter.post("/updateWorkExp", updateWorkExpController);
WorkExperienceRouter.delete("/deleteWorkExp", deleteWorkExpController);
