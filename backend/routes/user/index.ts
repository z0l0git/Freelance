import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  loginController,
} from "../../controller";
import { updateUserController } from "../../controller/user/update-user";
import { getRefreshTokenService } from "../../controller/user/refresh";

export const UserRouter = Router();

UserRouter.post("/createUser", createUserController);
UserRouter.post("/updateUser", updateUserController);
UserRouter.post("/login", loginController);
UserRouter.delete("/deleteUser", deleteUserController);
UserRouter.get("/users/refresh", getRefreshTokenService);
