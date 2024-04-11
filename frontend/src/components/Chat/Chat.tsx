import React from "react";
import { SentChat } from "./SentChat";
import { RecievedChat } from "./RecievedChat";
import Image from "next/image";

export const Chat = () => {
  return (
    <div className="w-full flex items-start justify-center h-screen">
      <div className="w-[30%] flex flex-col items-start gap-2 bg-slate-400 p-3 rounded-xl h-[92%] mt-[20px]">
        <div className="flex items-center gap-5 bg-gray-200 rounded-xl w-full p-[10px] cursor-pointer">
          <Image
            src={"/profiles.png"}
            width={50}
            height={50}
            alt={"profile pic"}
            className="rounded-full object-cover border-2 border-solid border-blue-300"
          />
          <p className="text-[20px] font-bold text-slate-800 ">John Doe</p>
        </div>
        <div className="flex items-center gap-5 bg-gray-200 rounded-xl w-full p-[10px] cursor-pointer">
          <Image
            src={"/profiles.png"}
            width={50}
            height={50}
            alt={"profile pic"}
            className="rounded-full object-cover border-2 border-solid border-blue-300"
          />
          <p className="text-[20px] font-bold text-slate-800 ">John Doe</p>
        </div>
      </div>
      <div className="w-[50%] flex flex-col items-start m-[20px]">
        <div className="w-full flex items-center gap-[2%] justify-start p-[30px] bg-[#13203B] rounded-t-xl">
          <Image
            src={"/profiles.png"}
            width={50}
            height={50}
            alt={"profile pic"}
          />
          <p className="text-[20px] font-bold text-white ">John Doe</p>
        </div>
        <div className="w-full flex flex-col rounded-xl rounded-t-none bg-slate-400 p-[20px]">
          <ul className="w-full flex flex-col-reverse h-[500px] overflow-y-scroll scrollbar-hide gap-2">
            <RecievedChat message={"Hello"} time="10:35" />
            <SentChat message={"Helloo"} time="10:36" />
            <RecievedChat message={"Hello"} time="10:35" />
            <SentChat message={"Helloo"} time="10:36" />
            <RecievedChat message={"Hello"} time="10:35" />
            <SentChat message={"Helloo"} time="10:36" />
            <SentChat message={"Helloo"} time="10:36" />
            <SentChat message={"Helloo"} time="10:36" />
            <RecievedChat message={"Hello"} time="10:35" />
          </ul>
          <div className="w-full  flex gap-[20px]  items-center">
            <input
              type="text"
              className="w-[90%] border-[2px] border-solid border-blue-200 h-[50px] rounded-md outline-none p-[10px]"
            />
            <button className="w-[10%] bg-[#24a0ed] rounded-md h-[50px] text-white hover:bg-[#0e75b4]">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
