import Image from "next/image";
import React from "react";

export const UserList = (props: any) => {
  const { room, join, name, msg, image } = props;
  return (
    <button
      onClick={() => join(room)}
      className="flex items-center gap-5 w-full gap-3 cursor-pointer p-3 hover:bg-slate-800"
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
            height: "auto",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-1 w-full overflow-hidden h-[60px]">
        <p className="text-[13px] font-bold text-white hover:text-blue-200 text-ellipsis overflow-hidden text-left whitespace-nowrap">
          {name}
        </p>
        <p className="text-[13px] text-slate-400 text-ellipsis overflow-hidden text-left whitespace-nowrap">
          {msg}
        </p>
      </div>
    </button>
  );
};
