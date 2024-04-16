import { Router } from "express";
import {
  createUserByClerkController,
  createUserController,
  deleteUserController,
  getAllUserController,
  loginController,
  getUserByIdController,
} from "../../controller";
import { updateUserController } from "../../controller/user/update-user";
import { getRefreshTokenService } from "../../controller/user/refresh";

import { UploadImage } from "../../cloudFlary/intex";

export const UserRouter = Router();

UserRouter.post("/createByClerk", createUserByClerkController);
UserRouter.post("/createUser", createUserController);
UserRouter.post("/updateUser", updateUserController);
UserRouter.post("/login", loginController);
UserRouter.delete("/deleteUser", deleteUserController);

UserRouter.get("/users/refresh", getRefreshTokenService);

UserRouter.get("/uploadImage", UploadImage);

UserRouter.get("/allUser", getAllUserController);
UserRouter.post("/getUserById", getUserByIdController);
