"use client";
import { Chat } from "@/components/Chat/Chat";
import { io } from "socket.io-client";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "@/components/context/DataContext";
import { UserList } from "@/components/Chat/UserList";
import { LoggedUser } from "./LoggedUser";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const URL = process.env.NEXT_PUBLIC_BACKEND;

export const ChatPage = () => {
  const [showChat, setShowChat] = useState(false);
  const [roomId, setroomId] = useState("");
  const [roomList, setRoomList] = useState([]);
  const { data } = useContext(DataContext);
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState("");

  const searchParams = useSearchParams();

  const roomlist = searchParams?.get("roomId");

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
    socket.emit("join_room", roomId);
  };

  useEffect(() => {
    setUser(data.firstName + " " + data.lastName);
  }, [socket]);

  return (
    <div className="flex w-full justify-center items-start h-[620px] mt-[20px]">
      <div className="w-[17%] flex flex-col items-start gap-2 bg-[#402e58] rounded-xl rounded-r-none h-full ">
        <div className="px-4 py-3 border-b border-white w-full">
          <LoggedUser
            name={data.firstName + " " + data.lastName}
            email={data.firstName}
            image={data.image}
          />
        </div>
        <div className="w-full h-full overflow-y-auto p-5">
          <UserList join={handleJoin} room={roomlist ? roomlist : roomId} />
        </div>
      </div>
      <Chat
        username={user}
        socket={socket}
        roomId={roomlist ? roomlist : roomId}
      />
    </div>
  );
};
