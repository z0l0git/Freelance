import { Router } from "express";
import { createEducationController } from "../../controller";



export const EducationRouter = Router()

EducationRouter.post("/createEducation", createEducationController)