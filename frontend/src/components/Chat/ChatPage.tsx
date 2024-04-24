"use client";
import { Chat } from "@/components/Chat/Chat";
import { io } from "socket.io-client";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "@/components/context/DataContext";
import { UserList } from "@/components/Chat/UserList";
import { LoggedUser } from "./LoggedUser";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

const URL = process.env.NEXT_PUBLIC_BACKEND;

export const ChatPage = () => {
  const { data: userData } = useContext(DataContext);
  const searchParams = useSearchParams();
  const [showChat, setShowChat] = useState(false);
  const [roomId, setroomId] = useState("1");
  const [rooms, setRooms] = useState<any[]>([]);
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState("");

  const roomlist = searchParams?.get("roomId");
  const { push } = useRouter();

  var socket: any;
  socket = io(URL || "https://freelance-gmjr.onrender.com", {
    transports: ["websocket"],
  });

  const handleJoin = (roomId: string) => {
    console.log("handleJoin", roomId);
    setShowChat(true);
    setroomId(roomId);
    setUserName("Room Number: " + roomId);
    setUser(userData.firstName + " " + userData.lastName);
    push(`/chat?roomId=${roomId}`);
    socket.emit("join_room", roomId);
  };

  const getUserRooms = async () => {
    try {
      const { data } = await axios.post("http://localhost:8000/getUserConvo", {
        user: userData._id,
      });
      setRooms(data);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  // getUserRooms();
  // console.log(rooms);

  useEffect(() => {
    getUserRooms();
    setUser(userData.firstName + " " + userData.lastName);
  }, [userData]);
  console.log(rooms);

  return (
    <div className="flex w-full justify-center items-start h-[620px] mt-[20px]">
      <div className="w-[17%] flex flex-col items-start bg-[#402e58] rounded-xl rounded-r-none h-full ">
        <div className="px-4 py-3 border-b border-white w-full">
          <LoggedUser
            name={userData.firstName + " " + userData.lastName}
            email={userData.firstName}
            image={userData.image}
          />
        </div>
        <div className="w-full h-full overflow-y-auto">
          {rooms?.map((el, i) => {
            const currentUser = el.participants.find(
              (el: any) => el._id !== userData._id
            );

            return (
              <UserList
                key={i}
                join={handleJoin}
                room={el.roomId}
                name={currentUser.firstName + " " + currentUser.lastName}
                image={currentUser.image}
                msg={el.messages[el.messages.length - 1].message}
              />
            );
          })}
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
