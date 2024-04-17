"use client";
import React from "react";
import { BlueButton, WhiteButton } from "../Button";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export const Profilepath = () => {
  const handleLogout = () => {
    localStorage.removeItem("Token");
    window.location.pathname = "/";
  };

  return (
    <div className="w-full flex justify-start mx-auto  items-center md:flex-col ">
      <div className="flex w-[1200px] mx-auto justify-between gap-10 items-center h-[513px] ">
        <div className="w-4/12 flex flex-col justify-center items-left">
          <h1 className="text-6xl font-semibold text-white">Profile</h1>
          <div className="flex items-center">
            <Link href="/">
              <span className="text-white font-semibold">Home</span>
            </Link>
            <IoIosArrowForward className="text-white font-semibold" />
            <Link href="/user-profile">
              <span className="text-white font-semibold">User Profile</span>
            </Link>
            <IoIosArrowForward className="text-white font-semibold" />
            <span className="text-white font-semibold">Profile</span>
          </div>
        </div>
        <div className="w-2/12 flex justify-start items-center">
          <WhiteButton
            buttonName="Log Out"
            buttonClass="blueBorderButton font-semibold"
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
};
