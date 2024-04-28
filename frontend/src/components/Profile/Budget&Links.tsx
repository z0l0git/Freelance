"use client";
import { BsTags } from "react-icons/bs";
import { CiCircleInfo } from "react-icons/ci";

import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { BlueButton, WhiteButton } from "../Button";
import { useRouter } from "next/navigation";
import axios from "axios";
import { io } from "socket.io-client";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useSearchParams } from "next/navigation";

type ConversationType = {
  _id: string;
  roomId: string;
  messages: string[];
  participants: [string];
};

export const BadgetAndLinks = (props: any) => {
  const { budget } = props;
  const { data: userData } = useContext(DataContext);

  const { push } = useRouter();
  const searchParams = useSearchParams();

  const URL = process.env.NEXT_PUBLIC_BACKEND;

  var socket: any;
  socket = io(URL || "https://freelance-gmjr.onrender.com", {
    transports: ["websocket"],
  });
  const user = searchParams?.get("id");

  const handleChat = async () => {
    const conversation = await axios.post<ConversationType>(
      "https://freelance-gmjr.onrender.com/createConvo",
      {
        participants: [user, userData._id],
      }
    );
    console.log(conversation.data);

    socket.emit("join_room", conversation.data.roomId);
    push(`/chat?roomId=${conversation?.data.roomId}`);
  };

  return (
    <div className="h-fit md:h-fit flex flex-col items-center justify-around gap-[20px]">
      <div className="w-full h-fit py-5 flex  items-center justify-center rounded-lg bg-white ">
        <div className="w-[334px] h-fit  flex flex-col justify-around ">
          <strong className="text-[32px] font-sans font-semibold">
            Budget
          </strong>
          <div className="w-[344px] h-[64px]  md:h-[79px] flex items-center gap-[10px] ">
            <BsTags className="w-[32px] h-[48px]" width={32} height={48} />
            <div className="w-fit h-[48px] flex items-center justify-between gap-[8px] font-sans font-semibold">
              <p className="text-[14px] md:text-[16px]">From</p>
              <div className="flex">
                <p className="text-[32px]">
                  ₮{budget ? budget : "not specified"}
                </p>
                <CiCircleInfo />
              </div>
            </div>
          </div>
          {/* <div className="mt-[20px] h-[51px] md:h-[54px] flex items-center justify-between">
            <p className="font-bold text-[20px]">Per Pages</p>
            <p className="text-[#0D48A1] font-bold text-[20px]">$29</p>
          </div>
          <div className="w-full h-fit flex flex-col justify-between">
            {CheckBoxData.map((el, index) => {
              return <CheckBoxMap key={index} text={el.text} />;
            })}
          </div> */}
          <div className="w-full mt-[20px]" onClick={handleChat}>
            <BlueButton buttonName="Send Chat" />
          </div>
        </div>
      </div>
      {/* <div className="w-full h-fit flex items-center  justify-center rounded-lg py-5 bg-white ">
        <div className="h-fit gap-[40px] flex flex-col">
          <strong className="text-[24px]">Linked Accounts</strong>
          <div className="w-full h-[36px] flex gap-[10px] cursor-pointer ">
            {LinkData.map((el, index) => {
              return <LinkMap key={index} linkIcon={el.linkIcon} />;
            })}
          </div>
        </div>
      </div> */}
    </div>
  );
};
