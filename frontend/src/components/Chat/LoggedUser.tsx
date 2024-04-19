import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";

export const LoggedUser = (props: any) => {
  const { image, name, email } = props;
  return (
    <div className="bg-transparent flex items-center gap-3">
      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white bg-slate-100">
        <Image
          alt="pfp"
          src={image ? image : "/proq.webp"}
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
      <div>
        <p className="font-semibold text-md text-slate-300 px-[2px]">{name}</p>
        <div className="flex items-center">
          <GoDotFill color="green" size={20} />
          <span className="font-semibold text-sm text-slate-300">{email}</span>
        </div>
      </div>
    </div>
  );
};
