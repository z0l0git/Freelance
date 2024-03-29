import { Router } from "express";
import { createUserController } from "../../controller";

export const UserRouter = Router();

UserRouter.post("/createUser", createUserController);
