"use client";
import { Chat } from "@/components/Chat/Chat";
import { io } from "socket.io-client";
import React, { useContext, useState } from "react";
import { DataContext } from "@/components/context/DataContext";
import { UserList } from "@/components/Chat/UserList";

const URL = process.env.NEXT_PUBLIC_BACKEND;
console.log(URL);

export const ChatPage = () => {
  const [showChat, setShowChat] = useState(false);
  const [roomId, setroomId] = useState("");
  const { data } = useContext(DataContext);
  const [userName, setUserName] = useState("");

  var socket: any;
  socket = io(URL || "https://freelance-gmjr.onrender.com", {
    transports: ["websocket"],
  });

  const handleJoin = (roomId: string) => {
    console.log("handleJoin", roomId);
    setShowChat(true);
    setroomId(roomId);
    setUserName("Room Number: " + roomId);
    console.log("userName", userName, roomId, "roomId");
    socket.emit("join_room", roomId);
  };

  return (
    <div className="flex w-full justify-center">
      <div className="w-[20%] flex flex-col items-start gap-2 bg-[#402e58] p-3 rounded-xl h-[650px] mt-[20px]">
        <UserList join={handleJoin} room="1" />
      </div>
      <Chat username={userName} socket={socket} roomId={roomId} />
    </div>
  );
};
