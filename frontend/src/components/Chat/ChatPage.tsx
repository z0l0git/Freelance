"use client";
import { Chat } from "@/components/Chat/Chat";
import { io } from "socket.io-client";
import React, { useContext, useState } from "react";
import { DataContext } from "@/components/context/DataContext";
import { UserList } from "@/components/Chat/UserList";

export const ChatPage = () => {
  const [showChat, setShowChat] = useState(false);
  const [roomId, setroomId] = useState("");
  const { data } = useContext(DataContext);
  const [userName, setUserName] = useState("");

  var socket: any;
  socket = io("http://localhost:8001");

  const handleJoin = (roomId: string) => {
    console.log("handleJoin", roomId);
    setShowChat(true);
    setroomId(roomId);
    setUserName(data.firstName + " " + data.lastName);
    console.log("userName", userName, roomId, "roomId");
    socket.emit("join_room", roomId);
  };

  return (
    <div className="flex w-full justify-center">
      <div className="w-[20%] flex flex-col items-start gap-2 bg-[#402e58] p-3 rounded-xl h-[650px] mt-[20px]">
        <UserList join={handleJoin} room="1" />
        <UserList join={handleJoin} room="2" />
        <UserList join={handleJoin} room="3" />
      </div>
      <Chat username={userName} socket={socket} roomId={roomId} />
    </div>
  );
};
