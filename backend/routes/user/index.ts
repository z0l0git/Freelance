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
import {
  upUserSjController,
  jobTitleUpController,
  budgetUpController,
  SkillUpController,
} from "../../controller/user/userUpdateController";

import { getPresignedUrl } from "../../cloudFlary";

export const UserRouter = Router();

UserRouter.post("/createByClerk", createUserByClerkController);
UserRouter.post("/createUser", createUserController);
UserRouter.post("/updateUser", updateUserController);
UserRouter.post("/login", loginController);
UserRouter.delete("/deleteUser", deleteUserController);

UserRouter.get("/users/refresh", getRefreshTokenService);

// UserRouter.get("/uploadImage", UploadImage);

UserRouter.get("/allUser", getAllUserController);
UserRouter.post("/getUserById", getUserByIdController);

UserRouter.post("/upUserSJ", upUserSjController);
UserRouter.post("/jobTitleUp", jobTitleUpController);
UserRouter.post("/budgetUp", budgetUpController);
UserRouter.post("/skillUp", SkillUpController);

UserRouter.get("/uploadImage", getPresignedUrl);
