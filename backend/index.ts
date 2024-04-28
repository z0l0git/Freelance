import { connectDb } from "./db";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import {
  CategoryRouter,
  EducationRouter,
  UserRouter,
  WorkExperienceRouter,
  ProjectRouter,
  PostReview,
} from "./routes";

import { Message } from "./routes/message";
import { Conversation } from "./routes/conversation";

// Create an express app

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(CategoryRouter);
app.use(UserRouter);
app.use(EducationRouter);
app.use(WorkExperienceRouter);
app.use(ProjectRouter);
app.use(PostReview);
app.use(Message);
app.use(Conversation);

connectDb();

// const io = new Server(httpServer, {
//   cors: {
//     origin: "http://localhost:3000", // Replace with your frontend URL
//     methods: ["GET", "POST"],
//     allowedHeaders: ["my-custom-header"],
//     credentials: true,
//   },
// });

const server = app.listen(8000, () => {
  console.log("Server Running on:", "http://localhost:8000");
});

const URL = process.env.FRONT_URL;

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: URL,
    credentials: true,
    methods: ["GET", "POST"],
    optionsSuccessStatus: 200,
    allowedHeaders: ["my-custom-header"],
  },
  transports: ["websocket", "polling", "flashsocket"],
});

io.on("connection", (socket: any) => {
  // console.log("A user connected:", socket.id);
  socket.on("join_room", (roomId: any) => {
    socket.join(roomId);
    console.log(`user with id-${socket.id} joined room - ${roomId}`);
  });

  socket.on("send_msg", (data: any) => {
    console.log(data, "DATA");
    //This will send a message to a specific room ID
    socket.to(data.roomId).emit("receive_msg", data);
  });

  socket.on("disconnect", () => {});
});
