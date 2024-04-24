import Image from "next/image";
import React from "react";

export const UserList = (props: any) => {
  const { room, join, name, msg, image, setUserName } = props;
  return (
    <button
      onClick={() => {
        setUserName(name);
        join(room);
      }}
      className="flex items-center gap-3 w-full cursor-pointer p-3 hover:bg-slate-800"
    >
      <div className="w-[50px] h-[50px] flex items-center justify-center">
        <Image
          src={image ? image : "/proq.webp"}
          alt="proq"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-1 w-[60%] overflow-hidden h-[60px]">
        <p className="text-[13px] font-bold text-white hover:text-blue-200 text-ellipsis overflow-hidden text-left whitespace-nowrap">
          {name}
        </p>
        <p className="text-[13px] text-slate-400 text-ellipsis overflow-hidden text-left whitespace-nowrap">
          {msg ? msg : "No Message"}
        </p>
      </div>
    </button>
  );
};
