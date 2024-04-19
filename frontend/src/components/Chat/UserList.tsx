import Image from "next/image";
import React from "react";

export const UserList = (props: any) => {
  const { room, join } = props;
  return (
    <button
      onClick={() => join(room)}
      className="flex items-center gap-5rounded-xl w-full p-[10px] cursor-pointer transition duration-300 ease-in-out  transition duration-300 ease-in-out hover:scale-105"
    >
      <p className="text-[20px] font-bold text-white hover:text-blue-200 ">
        # Room number: {room}
      </p>
    </button>
  );
};
