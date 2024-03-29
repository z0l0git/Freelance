import { Router } from "express";
import { createUserController } from "../../controller";
import { loginController } from "../../controller/user/login";

export const UserRouter = Router();

UserRouter.post("/createUser", createUserController);
UserRouter.post("/login", loginController);
