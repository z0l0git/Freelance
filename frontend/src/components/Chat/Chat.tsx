"use client";
import React, { useEffect, useState, useRef } from "react";
import { SentChat } from "./SentChat";
import { RecievedChat } from "./RecievedChat";
import axios from "axios";

interface IMsgDataTypes {
  roomId: string | number;
  author: string;
  message: string;
  time: string;
}

type ChatProps = {
  roomId: string;
};

export const Chat = ({ socket, username, roomId, sendUser }: any) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [currentMsg, setCurrentMsg] = useState("");
  const [chat, setChat] = useState<IMsgDataTypes[]>([]);

  useEffect(() => {
    const getMessages = async (id: string) => {
      const messages = await axios.post(
        `https://freelance-gmjr.onrender.com/getConvo`,
        {
          roomId: id,
        }
      );
      setChat(messages.data.messages);
    };

    getMessages(roomId);
  }, [roomId, socket, chat]);

  const sendData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentMsg !== "") {
      const msgData: IMsgDataTypes = {
        roomId,
        author: username,
        message: currentMsg,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_msg", msgData);
      try {
        const msgID = await axios.post(
          "https://freelance-gmjr.onrender.com/createMsg",
          {
            message: msgData.message,
            author: msgData.author,
            time: msgData.time,
          }
        );

        await axios.post("https://freelance-gmjr.onrender.com/updateConvo", {
          roomId: msgData.roomId,
          message: msgID.data._id,
        });
      } catch (error: any) {
        console.log(error.message);
      }

      setCurrentMsg("");
      chatContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    socket.on("receive_msg", (data: IMsgDataTypes) => {
      setChat((pre) => {
        return [...pre, data];
      });
    });
  }, [socket]);

  // useEffect(() => {
  //   if (chatContainerRef.current) {
  //     chatContainerRef.current.scrollTop =
  //       chatContainerRef.current.scrollHeight;
  //   }
  // }, [chat]);

  return (
    <div className="w-full md:w-[50%] flex h-full items-end">
      <div className=" left-0 w-full flex flex-col items-start h-full rounded-l-none">
        <div className="relative w-full h-full flex flex-col rounded-xl justify-end rounded-t-none rounded-l-none bg-slate-300 p-[20px]">
          <div className="absolute left-0 top-0 w-full flex items-center gap-[2%] justify-start h-[81px] p-[30px] border-b-[1px] border-solid border-white bg-[#13203B] rounded-tr-xl rounded-l-none">
            <p className="text-[20px] font-bold text-white ">
              {sendUser ? sendUser : "Chat"}
            </p>
          </div>
          <div
            ref={chatContainerRef}
            className="w-full h-full flex flex-col overflow-y-scroll scrollbar-hide gap-2"
          >
            {chat &&
              chat.map(({ roomId, author, message, time }, key) => (
                <ul
                  key={key}
                  className="w-full flex flex-col-reverse  text-left "
                >
                  {roomId === roomId && author === username ? (
                    <SentChat message={message} time={time} />
                  ) : (
                    <RecievedChat
                      author={author}
                      message={message}
                      time={time}
                    />
                  )}
                </ul>
              ))}
          </div>

          <div className="w-full flex gap-[20px] items-center">
            <form
              onSubmit={(e) => sendData(e)}
              className="w-full flex items-center justify-center relative"
            >
              <input
                type="text"
                value={currentMsg}
                className="w-full border-[2px] border-solid border-blue-200 h-[50px] rounded-md outline-none p-[10px]"
                placeholder="Type your message.."
                onChange={(e) => setCurrentMsg(e.target.value)}
              />
              <button className="absolute right-0 w-[30%] md:w-[10%] bg-[#24a0ed] rounded-md h-[48px] text-auto text-white hover:bg-[#0e75b4]">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
