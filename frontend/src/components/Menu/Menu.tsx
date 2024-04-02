"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuMessageCard, MenuNotificationCard } from "./MenuMessageCard";
import { MdOutlineMessage, MdNotifications } from "react-icons/md";
import { MenuProfileCard } from "./MenuProfileCard";
import { WhiteButton } from "../Button";

export const Menu = () => {
  return (
    <div className="w-screen bg-[#13203B] py-4 flex justify-around z-50 sticky top-0">
      <div className="w-full mx-auto px-3 flex justify-around h-10 items-center gap-4">
        <div className="flex gap-4 relative w-[35%] md:w-[50%]  sm:w-[70%]">
          <WhiteButton
            buttonName="Зарлагдсан ажлууд"
            buttonClass="text-white hover:text-blue-500 hover:underline"
          />
          <WhiteButton
            buttonName="Freelancer хайх"
            buttonClass="text-white hover:text-blue-500 hover:underline"
          />
          <WhiteButton
            buttonName="Холбоо барих"
            buttonClass="text-white hover:text-blue-500 hover:underline"
          />
        </div>
        <div className="flex gap-4">
          <DropdownMenu>
            <div className="flex justify-center items-center p-2 rounded-full border bg-[#343e56] w-10 h-10">
              <DropdownMenuTrigger>
                <MdOutlineMessage className="color-white text-white w-6 h-6" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[306px] h-[354px] p-5 justify-end">
                <MenuMessageCard
                  userName="Battulga"
                  messageSubject="Mungu uu avaachee edfdfa sdf"
                  createdDate="unuudur"
                  profilePicture="/f10.png"
                />
              </DropdownMenuContent>
            </div>
          </DropdownMenu>
          <DropdownMenu>
            <div className="flex justify-center items-center p-2 rounded-full border bg-[#343e56] w-10 h-10">
              <DropdownMenuTrigger>
                <MdNotifications className="color-white text-white w-8 h-8" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[306px] h-[354px] p-5">
                <MenuNotificationCard
                  userName="Ganaa"
                  createdDate={DataView}
                  profilePicture="/f10.png"
                />
              </DropdownMenuContent>
            </div>
          </DropdownMenu>
          <DropdownMenu>
            <div className="flex justify-center items-center rounded-full border w-10 h-10 ">
              <MenuProfileCard profilePicture="/f10.png" />
            </div>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
