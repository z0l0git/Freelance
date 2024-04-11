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
} from "./routes";
import { Server } from "socket.io";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(CategoryRouter);
app.use(UserRouter);
app.use(EducationRouter);
app.use(WorkExperienceRouter);
app.use(ProjectRouter);

connectDb();

app.listen(8000, () => {
  console.log("http://localhost:8000");
});

// Socket*********************************************************

// const ADMIN = "Admin";

// app.use(express.static("chat"));
// const chatServer = app.listen(3600, () => {
//   console.log("http://localhost:3600");
// });

// interface User {
//   id: string;
//   name: string;
//   room: string;
// }

// interface Message {
//   name: string;
//   text: string;
//   time: string;
// }

// interface UsersState {
//   users: User[];
//   setUsers: (newUsersArray: User[]) => void;
// }

// const UsersState: UsersState = {
//   users: [],
//   setUsers: function (newUsersArray: User[]) {
//     this.users = newUsersArray;
//   },
// };

// const io = new Server(chatServer, {
//   cors: {
//     origin:
//       process.env.NODE_ENV === "production"
//         ? false
//         : ["http://localhost:5500", "http://127.0.0.1:5500"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log(`User ${socket.id} connected`);

//   // Upon connection - only to user
//   socket.emit("message", buildMsg(ADMIN, "Welcome to Chat App!"));

//   socket.on("enterRoom", ({ name, room }: { name: string; room: string }) => {
//     // leave previous room
//     const prevRoom = getUser(socket.id)?.room;

//     if (prevRoom) {
//       socket.leave(prevRoom);
//       io.to(prevRoom).emit(
//         "message",
//         buildMsg(ADMIN, `${name} has left the room`)
//       );
//     }

//     const user = activateUser(socket.id, name, room);

//     // Cannot update previous room users list until after the state update in activate user
//     if (prevRoom) {
//       io.to(prevRoom).emit("userList", {
//         users: getUsersInRoom(prevRoom),
//       });
//     }

//     // join room
//     socket.join(user.room);

//     // To user who joined
//     socket.emit(
//       "message",
//       buildMsg(ADMIN, `You have joined the ${user.room} chat room`)
//     );

//     // To everyone else
//     socket.broadcast
//       .to(user.room)
//       .emit("message", buildMsg(ADMIN, `${user.name} has joined the room`));

//     // Update user list for room
//     io.to(user.room).emit("userList", {
//       users: getUsersInRoom(user.room),
//     });

//     // Update rooms list for everyone
//     io.emit("roomList", {
//       rooms: getAllActiveRooms(),
//     });
//   });

//   // When user disconnects - to all others
//   socket.on("disconnect", () => {
//     const user = getUser(socket.id);
//     userLeavesApp(socket.id);

//     if (user) {
//       io.to(user.room).emit(
//         "message",
//         buildMsg(ADMIN, `${user.name} has left the room`)
//       );

//       io.to(user.room).emit("userList", {
//         users: getUsersInRoom(user.room),
//       });

//       io.emit("roomList", {
//         rooms: getAllActiveRooms(),
//       });
//     }

//     console.log(`User ${socket.id} disconnected`);
//   });

//   // Listening for a message event
//   socket.on("message", ({ name, text }: { name: string; text: string }) => {
//     const room = getUser(socket.id)?.room;
//     if (room) {
//       io.to(room).emit("message", buildMsg(name, text));
//     }
//   });

//   // Listen for activity
//   socket.on("activity", (name: string) => {
//     const room = getUser(socket.id)?.room;
//     if (room) {
//       socket.broadcast.to(room).emit("activity", name);
//     }
//   });
// });

// function buildMsg(name: string, text: string): Message {
//   return {
//     name,
//     text,
//     time: new Intl.DateTimeFormat("default", {
//       hour: "numeric",
//       minute: "numeric",
//       second: "numeric",
//     }).format(new Date()),
//   };
// }

// // User functions
// function activateUser(id: string, name: string, room: string): User {
//   const user: User = { id, name, room };
//   UsersState.setUsers([
//     ...UsersState.users.filter((user) => user.id !== id),
//     user,
//   ]);
//   return user;
// }

// function userLeavesApp(id: string): void {
//   UsersState.setUsers(UsersState.users.filter((user) => user.id !== id));
// }

// function getUser(id: string): User | undefined {
//   return UsersState.users.find((user) => user.id === id);
// }

// function getUsersInRoom(room: string): User[] {
//   return UsersState.users.filter((user) => user.room === room);
// }

// function getAllActiveRooms(): string[] {
//   return Array.from(new Set(UsersState.users.map((user) => user.room)));
// }
