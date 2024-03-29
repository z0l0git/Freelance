"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

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
    <div className="w-screen bg-[#13203B] py-4 flex justify-center z-100">
      <div className="w-[1280px] mx-auto px-3 flex justify-between h-10 py-4 items-center gap-4">
        <div className="flex gap-4 relative">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:text-blue-500 bg-inherit hover:bg-inherit text-white ">
                  Зарлагдсан ажлууд
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col gap-2 w-84 h-fit">
                  <NavigationMenuLink>
                    <p className="hover:bg-gray-200 hover:ease-in-outtransition ease-in-out delay-150 hover:translate-x-1  duration-300">
                      Салбараар
                    </p>
                  </NavigationMenuLink>
                  <NavigationMenuLink> Салбараар</NavigationMenuLink>
                  <NavigationMenuLink>Салбараар</NavigationMenuLink>
                  <NavigationMenuLink>Салбараар</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="hover:bg-transparent">
                <NavigationMenuTrigger className="hover:text-blue-500 bg-inherit  text-white">
                  Freelancer хайх
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col gap-2 w-[245px] hover:bg-transparent ">
                  <NavigationMenuLink>Мэргэжилээр</NavigationMenuLink>
                  <NavigationMenuLink>Нэрээр</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <WhiteButton buttonName="Холбоо барих" buttonClass="text-white" />
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
