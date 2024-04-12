import Image from "next/image";
import React from "react";

export const HeaderSign = () => {
  return (
    <div className="bg-[url(https://pixner.net/aihire/aihire/assets/img/bn/breadcumndbg.jpg)] flex items-center justify-between px-[10%]">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "30%", height: "auto" }}
      />
      {/* <Image src={"/bread-service.png"} alt="head" width={261} height={232} /> */}
    </div>
  );
};
