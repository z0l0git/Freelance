"use client";
import React, { useEffect, useState } from "react";
import { SentChat } from "./SentChat";
import { RecievedChat } from "./RecievedChat";
import Image from "next/image";

interface IMsgDataTypes {
  roomId: string | number;
  user: string;
  msg: string;
  time: string;
}

export const Chat = ({ socket, username, roomId }: any) => {
  const [currentMsg, setCurrentMsg] = useState("");
  const [chat, setChat] = useState<IMsgDataTypes[]>([]);

  const sendData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentMsg !== "") {
      const msgData: IMsgDataTypes = {
        roomId,
        user: username,
        msg: currentMsg,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_msg", msgData);
      setCurrentMsg("");
    }
  };

  useEffect(() => {
    socket.on("receive_msg", (data: IMsgDataTypes) => {
      setChat((pre) => {
        return [...pre, data];
      });
    });
  }, [socket]);

  return (
    <div className="w-[40%] flex items-start justify-center h-fit">
      <div className="w-full flex flex-col items-start m-[20px]">
        <div className="w-full flex items-center gap-[2%] justify-start p-[30px] bg-[#13203B] rounded-t-xl">
          <Image
            src={"/profiles.png"}
            width={50}
            height={50}
            alt={"profile pic"}
          />
          <p className="text-[20px] font-bold text-white ">{username}</p>
        </div>
        <div className="w-full flex flex-col rounded-xl rounded-t-none bg-slate-300 p-[20px]">
          <div className="w-full flex h-[440px] flex-col  overflow-y-scroll scrollbar-hide ">
            {chat.map(({ roomId, user, msg, time }, key) => (
              <ul
                key={key}
                className="w-full flex flex-col-reverse anchor scrollbar-hide"
              >
                {roomId === roomId && user === username ? (
                  <SentChat message={msg} time={time} />
                ) : (
                  <RecievedChat message={msg} time={time} />
                )}
              </ul>
            ))}
          </div>

          <div className="w-full anchor flex gap-[20px]  items-center">
            <form
              onSubmit={(e) => sendData(e)}
              className="w-full flex items-center justify-center"
            >
              <input
                type="text"
                value={currentMsg}
                className="w-[90%] border-[2px] border-solid border-blue-200 h-[50px] rounded-md outline-none p-[10px]"
                placeholder="Type your message.."
                onChange={(e) => setCurrentMsg(e.target.value)}
              />
              <button className="w-[10%] bg-[#24a0ed] rounded-md h-[50px] text-white hover:bg-[#0e75b4]">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
