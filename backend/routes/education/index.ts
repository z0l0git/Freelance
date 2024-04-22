import { Router } from "express";
import {
  createEducationController,
  deleteEducationController,
  updateEducationController,
} from "../../controller";

export const EducationRouter = Router();

EducationRouter.post("/createEducation", createEducationController);

EducationRouter.post("/deleteEducation", deleteEducationController);
EducationRouter.post("/updateEducation", updateEducationController);
