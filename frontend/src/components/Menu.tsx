"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MdOutlineMessage, MdNotifications } from "react-icons/md";

export const Menu = () => {
  return (
    <div className="w-screen bg-[#13203B] py-4 absolute top-[108px] flex justify-center z-50">
      <div className="desktop mx-auto px-3 flex justify-between h-10 py-4 items-center gap-4">
        <div className="flex gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white">
              Ажил хайх
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Төслөөр</DropdownMenuItem>
              <DropdownMenuItem>Захиалагчаар</DropdownMenuItem>
              <DropdownMenuItem>Салбараар</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white">
              Freelancer хайх
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Салбараар</DropdownMenuItem>
              <DropdownMenuItem>Чадвараар</DropdownMenuItem>
              <DropdownMenuItem>Үнэлгээрээр</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="text-white"> Contact button orj ireh </div>
        <div className="flex gap-4">
          <DropdownMenu>
            <div className="flex justify-center items-center p-2 rounded-full border bg-[#343e56] w-8 h-8">
              <DropdownMenuTrigger>
                <MdOutlineMessage className="color-white text-white" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Салбараар</DropdownMenuItem>
                <DropdownMenuItem>Чадвараар</DropdownMenuItem>
                <DropdownMenuItem>Үнэлгээрээр</DropdownMenuItem>
              </DropdownMenuContent>
            </div>
          </DropdownMenu>
          <DropdownMenu>
            <div className="flex justify-center items-center p-2 rounded-full border bg-[#343e56] w-8 h-8">
              <DropdownMenuTrigger>
                <MdNotifications className="color-white text-white w-8 h-8" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Салбараар</DropdownMenuItem>
                <DropdownMenuItem>Чадвараар</DropdownMenuItem>
                <DropdownMenuItem>Үнэлгээрээр</DropdownMenuItem>
              </DropdownMenuContent>
            </div>
          </DropdownMenu>
          <DropdownMenu>
            <div className="flex justify-center items-center rounded-full border bg-white w-8 h-8 ">
              <DropdownMenuTrigger>
                <div className="color-white text-white bg-white w-8 h-8 rounded-full"></div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Салбараар</DropdownMenuItem>
                <DropdownMenuItem>Чадвараар</DropdownMenuItem>
                <DropdownMenuItem>Үнэлгээрээр</DropdownMenuItem>
              </DropdownMenuContent>
            </div>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
