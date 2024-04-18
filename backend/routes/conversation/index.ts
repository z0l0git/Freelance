import { Router } from "express";
import { createConversation } from "../../controller/conversation/createConversation";
import { updateConversation } from "../../controller/conversation/updateConvo";
import { getConversation } from "../../controller/conversation/getConvo";

export const Conversation = Router();

Conversation.post("/createConvo", createConversation);
Conversation.post("/updateConvo", updateConversation);
Conversation.post("/getConvo", getConversation);
