"use client";
import React from "react";
import Image from "next/image";
import { BlueButton, WhiteButton } from "../Button";
import { IoSearchOutline } from "react-icons/io5";
import { SelectBox } from "./SelectBox";
import { SearchDrawer } from "./SearchDrawer";

export const HeaderSearch = () => {
  return (
    <div className="flex justify-around items-center py-[24px] h-[108px]">
      <div className="flex items-center gap-[24px] text-white">
        <Image
          src="/logo.png"
          alt="Google"
          width={186}
          height={49}
          className="cursor-pointer"
          onClick={() => window.location.replace("/")}
        />
        {/* <div className="hidden sm:flex gap-[24px]">
          <WhiteButton
            buttonName="How It Works
            buttonClass="text-white hover:text-blue-500 hover:underline"
          />
          <WhiteButton
            buttonName="Why Freelancely!"
            buttonClass="text-white hover:text-blue-500 hover:underline"
          />
        </div> */}
      </div>
      <div className="flex items-center gap-[24px] h-full">
        <div className="items-center p-[8px] border-[1px] solid border-[#0d47a1] h-full rounded-[100px] hidden lg:flex">
          <IoSearchOutline size={20} color="white" />
          <input
            type="text"
            placeholder="Search"
            className="h-full outline-none pl-[10px] bg-transparent text-white"
          />
          <SelectBox />
        </div>
        <div className="bg-white rounded-full p-2 cursor-pointer lg:hidden flex justify-center items-center">
          <SearchDrawer />
        </div>
        <div className="py-[10px]">
          <BlueButton buttonName="Post A Project" />
        </div>
      </div>
    </div>
  );
};
