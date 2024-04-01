import React from "react";
import Image from "next/image";
import { BlueButton } from "../Button";
export const HeaderSearch = () => {
  return (
    <div className="flex justify-between bg-black">
      <div className="flex">
        <Image src="/logo.png" alt="Google" width={186} height={49} />
        <p>How It Works</p>
        <p>Why Freelancely</p>
      </div>
      <div>
        <div></div>
        <div>
          <BlueButton buttonName="Post A Project" />
        </div>
      </div>
    </div>
  );
};
