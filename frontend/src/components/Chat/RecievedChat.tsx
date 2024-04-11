import React from "react";

type RecievedChatProps = {
  message: string;
  time: string;
};

export const RecievedChat = (props: RecievedChatProps) => {
  const { message, time } = props;
  return (
    <li className="w-fit max-w-[60%] self-start">
      <p className="p-[10px] bg-gray-200 rounded-lg text-black">{message}</p>
      <div className="w-full flex justify-start items-center">
        <span className="text-xs text-slate-500">{time}</span>
      </div>
    </li>
  );
};
