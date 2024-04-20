"use client";
import { Chat } from "@/components/Chat/Chat";
import { io } from "socket.io-client";
import React, { useContext, useState } from "react";
import { DataContext } from "@/components/context/DataContext";
import { UserList } from "@/components/Chat/UserList";
import { LoggedUser } from "./LoggedUser";

const URL = process.env.NEXT_PUBLIC_BACKEND;
console.log(URL);

export const ChatPage = () => {
  const [showChat, setShowChat] = useState(false);
  const [roomId, setroomId] = useState("");
  const { data } = useContext(DataContext);
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState("");

  var socket: any;
  socket = io(URL || "https://freelance-gmjr.onrender.com", {
    transports: ["websocket"],
  });

  const handleJoin = (roomId: string) => {
    console.log("handleJoin", roomId);
    setShowChat(true);
    setroomId(roomId);
    setUserName("Room Number: " + roomId);
    setUser(data.firstName + " " + data.lastName);
    console.log("userName", userName, roomId, "roomId");
    socket.emit("join_room", roomId);
  };

  return (
    <div className="flex w-full justify-center items-center h-[60%] mt-[20px]">
      <div className="w-[13%] flex flex-col items-start gap-2 bg-[#402e58] rounded-xl rounded-r-none h-full ">
        <div className="px-4 py-3 border-b border-white w-full">
          <LoggedUser
            name={data.firstName + " " + data.lastName}
            email={data.firstName}
            image={data.image}
          />
        </div>
        <div className="w-full h-full overflow-y-auto p-5">
          <UserList join={handleJoin} room="1" />
        </div>
      </div>
      <Chat username={user} socket={socket} roomId={roomId} />
    </div>
  );
};
