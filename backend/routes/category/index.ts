import { Router } from "express";
import {
  createCategoryController,
  deleteCategoryController,
  getCategoryController,
  createProjectCategoryController,
  getProjectControlller,
} from "../../controller";

export const CategoryRouter = Router();

CategoryRouter.post("/createCategory", createCategoryController);
CategoryRouter.get("/categories", getCategoryController);
CategoryRouter.delete("/deleteCategory", deleteCategoryController);
CategoryRouter.post("/createProjectCategory", createProjectCategoryController);
CategoryRouter.get("/getProjectCategory", getProjectControlller);
 