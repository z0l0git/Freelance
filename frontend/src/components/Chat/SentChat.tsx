import React from "react";

type SentChatProps = {
  message: string;
  time: string;
};

export const SentChat = (props: SentChatProps) => {
  const { message, time } = props;
  return (
    <li className="w-fit max-w-[60%] self-end">
      <p className="p-[10px] bg-blue-200 rounded-lg text-black">{message}</p>
      <div className="w-full flex justify-end items-center">
        <span className="text-xs text-slate-500">{time}</span>
      </div>
    </li>
  );
};
