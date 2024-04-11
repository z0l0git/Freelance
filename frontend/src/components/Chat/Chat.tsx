import React from "react";
import { SentChat } from "./SentChat";
import { RecievedChat } from "./RecievedChat";
import Image from "next/image";

export const Chat = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center m-[20px]">
      <div className="w-[40%] flex items-center gap-[5%] justify-start p-[30px]">
        <Image
          src={"/profiles.png"}
          width={50}
          height={50}
          alt={"profile pic"}
        />
        <p className="text-[20px] font-bold text-slate-800 ">John Doe</p>
      </div>
      <div className="w-[40%] flex flex-col rounded-xl bg-slate-400 p-[20px]">
        <ul className="w-full flex flex-col justify-left ">
          <SentChat message={"Helloo"} time="10:35" />
          <RecievedChat message={"Helloo Bitch"} time="10:36" />
        </ul>
        <div className="w-full">
          <form className="w-full flex gap-[20px]  items-center">
            <input
              type="text"
              className="w-[90%] border-[2px] border-solid border-blue-200 h-[50px] rounded-md outline-none p-[10px]"
              name=""
              id=""
            />
            <button className="w-[10%] bg-[#24a0ed] rounded-md h-[50px] text-white hover:bg-[#0e75b4]">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
