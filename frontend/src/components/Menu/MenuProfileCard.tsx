"use client";

import Image from "next/image";
import { IoIosCheckmarkCircle, IoMdNotificationsOutline } from "react-icons/io";
import { LiaUserCheckSolid } from "react-icons/lia";
import {
  MdPayment,
  MdChatBubbleOutline,
  MdOutlinePostAdd,
} from "react-icons/md";

import React, { useState } from "react";
import Link from "next/link";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
export const MenuProfileCard = (props: any) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const { profilePicture, userName, userMail } = props;
  return (
    <div className="flex justify-center items-center rounded-full">
      <button onClick={handleClick}>
        <Image alt="user picture" src={profilePicture} width={60} height={60} />
      </button>
      {open ? (
        <div className="flex flex-col gap-2 absolute top-12 right-0 w-[306px] py-6 px-5 bg-white rounded-2xl">
          <div className="flex flex-col justify-center items-center gap-5">
            <MenuProfileUserInfoCard />
          </div>
          <div className="border-b-2 border-dashed my-4"></div>
          <div>
            <p className="text-sm text-gray-600 font-thin">Account</p>
          </div>
          <div className=" flex gap-2 w-full h-8">
            <Link
              href="/user-profile"
              className="flex gap-2 w-full h-8 items-center"
            >
              <LiaUserCheckSolid />
              <span className="font-semibold text-gray-800">Profile</span>
            </Link>
          </div>
          <div className="flex gap-2 w-full h-8 items-center">
            <IoMdNotificationsOutline />
            <span className="font-semibold text-gray-800 ">
              Notifications
            </span>{" "}
          </div>

          <div className="flex gap-2 w-full h-8">
            <Link
              href={"/new-gig"}
              className="flex gap-2 w-full h-8 items-center"
            >
              <MdOutlinePostAdd />
              <span className="font-semibold text-gray-800">
                Post A Project
              </span>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export const MenuProfileUserInfoCard = (props: any) => {
  const { userName, userMail } = props;
  return (
    <div className="w-[242px] h-16 flex gap-2 items-center">
      <div className="w-16 h-16 flex justify-center items-center rounded-full border p-2 relative">
        <Image src="/f10.png" width={62} height={62} alt="user Profile" />
        <IoIosCheckmarkCircle className="absolute bottom-0 right-0  text-green-600" />
      </div>
      <div>
        <div className="text-lg">{userName}Ner</div>
        <div className="text-md">{userMail} Mail</div>
      </div>
    </div>
  );
};
