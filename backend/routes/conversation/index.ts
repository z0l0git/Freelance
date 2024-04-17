import { Router } from "express";
import { createConversation } from "../../controller/conversation/createConversation";

export const Conversation = Router();

Conversation.post("/createConvo", createConversation);
