import Image from "next/image";
import React from "react";

export const UserList = (props: any) => {
  const { room, join } = props;
  return (
    <button
      onClick={() => join(room)}
      className="flex items-center gap-5 bg-gray-200 rounded-xl w-full p-[10px] cursor-pointer transition duration-300 ease-in-out hover:bg-blue-200 hover:text-white transition duration-300 ease-in-out hover:scale-105"
    >
      <Image
        src={"/profiles.png"}
        width={50}
        height={50}
        alt={"profile pic"}
        className="rounded-full object-cover border-2 border-solid border-blue-300"
      />
      <p className="text-[20px] font-bold text-slate-800 ">{room}</p>
    </button>
  );
};