import { Router } from "express";
import { createMessage } from "../../controller/message/createMessage";

export const Message = Router();

Message.post("/createMsg", createMessage);
