import { Router } from "express";
import { createCategoryController } from "../../controller";

export const CategoryRouter = Router();

CategoryRouter.post("/createCategory", createCategoryController);
