import React from "react";
import Image from "next/image";
import { BlueButton } from "../Button";
import { IoSearchOutline } from "react-icons/io5";

export const HeaderSearch = () => {
  return (
    <div className="flex justify-around items-center py-[24px]">
      <div className="flex items-center gap-[24px]">
        <Image src="/logo.png" alt="Google" width={186} height={49} />
        <p>How It Works</p>
        <p>Why Freelancely</p>
      </div>
      <div className="flex items-center gap-[24px]">
        <div className="flex items-center">
          <IoSearchOutline />
          <input type="text" />
        </div>
        <div>
          <BlueButton buttonName="Post A Project" />
        </div>
      </div>
    </div>
  );
};
