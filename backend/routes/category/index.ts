import { Router } from "express";
import {
  createCategoryController,
  getCategoryController,
} from "../../controller";

export const CategoryRouter = Router();

CategoryRouter.post("/createCategory", createCategoryController);
CategoryRouter.get("/categories", getCategoryController);
