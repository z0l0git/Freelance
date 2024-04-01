import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  loginController,
} from "../../controller";

export const UserRouter = Router();

UserRouter.post("/createUser", createUserController);
UserRouter.post("/login", loginController);
UserRouter.delete("/deleteUser", deleteUserController);
