import React from "react";

type RecievedChatProps = {
  message: string;
  time: string;
  author: string;
};

export const RecievedChat = (props: RecievedChatProps) => {
  const { message, time, author } = props;
  return (
    <li className="w-fit max-w-[60%] self-start">
      <span className="text-xs text-slate-500 font-bold">{author}</span>

      <p className="p-[10px] bg-gray-200 rounded-xl rounded-bl-none text-black">
        {message}
      </p>
      <div className="w-full flex justify-start items-center">
        <span className="text-xs text-slate-500">{time}</span>
      </div>
    </li>
  );
};
