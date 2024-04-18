"use client";
import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { ButtonWithBlueBorder } from "../Button";

export const MainProfileInfo = () => {
  const handlePush = () => {
    window.location.href = "/profile";
    console.log("he");
  };
  return (
    <div className="w-[416px] h-[488px] flex flex-col items-center gap-4 rounded-2xl border bg-white  max-sm:w-full max-sm:px-2 sm:w-full sm:px-2">
      <div className="flex justify-center items-center p-4 ">
        <div className="w-30 h-30 relative flex justify-center items-center p-4 rounded-full border ">
          <Image
            alt="user profile picture"
            src="/f6.png"
            width={88}
            height={88}
          />
          <IoIosCheckmarkCircle className="absolute right-0 bottom-5 text-green-500" />
        </div>
      </div>
      <div className="w-full h-fit flex flex-col items-center justify-center gap-4">
        <div className="text-2xl font-bold xl:text-xl ">UserName</div>
        <div className="text-base font-medium xl:font-sm">User Discription</div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <CiLocationOn />
            <div className="xl:text-sm">City</div>
          </div>
          <div className="w-1 h-1 rounded-full bg-blue-800"></div>
          <div className="flex items-center gap-1">
            <FaStar color="orange" />
            <div className="xl:text-sm">4.8</div>
            <div className="xl:text-sm">(118)</div>
          </div>
          <div className="w-1 h-1 rounded-full bg-blue-800"></div>
          <div className="flex items-center xl:text-sm">Member : 2011</div>
        </div>
        <div className="flex gap-2">
          <div className="w-9 h-9 flex justify-center items-center rounded-full bg-gray-100 text-[#0D49A1] hover:bg-[#0D49A1] hover:text-white">
            <FaFacebook />
          </div>
          <div className="w-9 h-9 flex justify-center items-center rounded-full bg-gray-100 text-[#0D49A1] hover:bg-[#0D49A1] hover:text-white">
            <FaYoutube />
          </div>
          <div className="w-9 h-9 flex justify-center items-center rounded-full bg-gray-100 text-[#0D49A1] hover:bg-[#0D49A1] hover:text-white">
            <FaInstagram />
          </div>
          <div className="w-9 h-9 flex justify-center items-center rounded-full bg-gray-100 text-[#0D49A1] hover:bg-[#0D49A1] hover:text-white">
            <FaTwitter />
          </div>
          <div className="w-9 h-9 flex justify-center items-center rounded-full bg-gray-100 text-[#0D49A1] hover:bg-[#0D49A1] hover:text-white">
            <FaPinterest />
          </div>
        </div>
        <div onClick={handlePush}>
          <ButtonWithBlueBorder buttonName="View Profile" />
        </div>
      </div>
    </div>
  );
};
