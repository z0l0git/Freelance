import { Router } from "express";
import {
  createEducationController,
  deleteEducationController,
  updateEducationController,
} from "../../controller";

export const EducationRouter = Router();

EducationRouter.post("/createEducation", createEducationController);

EducationRouter.delete("/deleteEducation", deleteEducationController);
EducationRouter.post("/updateEducation", updateEducationController);
