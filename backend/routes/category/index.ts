import { Router } from "express";
import {
  createCategoryController,
  deleteCategoryController,
  getCategoryController,
} from "../../controller";

export const CategoryRouter = Router();

CategoryRouter.post("/createCategory", createCategoryController);
CategoryRouter.get("/categories", getCategoryController);
CategoryRouter.delete("/deleteCategory", deleteCategoryController);
