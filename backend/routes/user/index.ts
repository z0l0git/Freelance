import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  loginController,
} from "../../controller";
import { updateUserController } from "../../controller/user/update-user";

export const UserRouter = Router();

UserRouter.post("/createUser", createUserController);
UserRouter.post("/updateUser", updateUserController);
UserRouter.post("/login", loginController);
UserRouter.delete("/deleteUser", deleteUserController);
