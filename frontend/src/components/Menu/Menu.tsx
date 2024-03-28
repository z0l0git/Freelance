"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuMessageCard, MenuNotificationCard } from "./MenuMessageCard";
import {
  MdOutlineMessage,
  MdNotifications,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { MenuProfileCard } from "./MenuProfileCard";
import { GoChevronDown } from "react-icons/go";
export const Menu = () => {
  return (
    <div className="w-screen bg-[#13203B] py-4 absolute top-[108px] flex justify-center z-50">
      <div className="w-[1280px] mx-auto px-3 flex justify-between h-10 py-4 items-center gap-4">
        <div className="flex gap-4 relative">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white flex items-center ">
              <span>Ажил хайх</span>
              <GoChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white w-[245px] absolute left-0">
              <DropdownMenuItem className="h-8">Төслөөр</DropdownMenuItem>
              <DropdownMenuItem className="h-8">Захиалагчаар</DropdownMenuItem>
              <DropdownMenuItem className="h-8">Салбараар</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white flex items-center">
              <span>Freelancer хайх</span>
              <GoChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white  w-[245px] ">
              <DropdownMenuItem>Салбараар</DropdownMenuItem>
              <DropdownMenuItem>Чадвараар</DropdownMenuItem>
              <DropdownMenuItem>Үнэлгээрээр</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="text-white"> Contact button orj ireh </div>
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
