"use client";

import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuMessageCard, MenuNotificationCard } from "./MenuMessageCard";
import { MdNotifications } from "react-icons/md";
import { BsChatText, BsBell } from "react-icons/bs";
import { MenuProfileCard } from "./MenuProfileCard";
import { WhiteButton } from "../Button";
import { AnimatePresence } from "framer-motion";

import Image from "next/image";
import { Example } from "./MenuToggle";
import { MenuList } from "./MenuList";

export const Menu = ({ triggerPoint = 400 }) => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition >= triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [triggerPoint]);
  return (
    <>
      <div
        className={`w-screen bg-[#13203B] py-4 flex justify-around z-50 sticky top-0 ${
          isVisible ? "fixed top-0" : ""
        }`}
      >
        <div className="w-full mx-auto px-3 flex md:justify-around justify-between h-10 items-center gap-4">
          <Image
            src={"/logoSquare.png"}
            alt="logo"
            width={40}
            height={30}
            className="md:hidden"
          />
          <div className="hidden md:flex flex gap-4 relative w-[35%] md:w-[50%] sm:w-[70%]">
            <WhiteButton
              buttonName="Browse Projects"
              buttonClass="text-white hover:text-blue-500 hover:underline"
            />
            <WhiteButton
              buttonName="Find Freelancers"
              buttonClass="text-white hover:text-blue-500 hover:underline"
            />
            <WhiteButton
              buttonName="Contact"
              buttonClass="text-white hover:text-blue-500 hover:underline"
            />
          </div>
          <div className="flex gap-4 items-center">
            <DropdownMenu>
              <div className="flex justify-center items-center p-2 rounded-full  bg-[#343e56] w-10 h-10">
                <DropdownMenuTrigger>
                  <BsChatText className="color-white text-white w-6 h-6" />
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
              <div className="flex justify-center items-center p-2 rounded-full bg-[#343e56] w-10 h-10">
                <DropdownMenuTrigger>
                  <BsBell className="color-white text-white w-6 h-6" />
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
              <div className="flex justify-center items-center rounded-full w-10 h-10 ">
                <MenuProfileCard profilePicture="/f10.png" />
              </div>
            </DropdownMenu>
            <div className="md:hidden" onClick={() => setOpen(!open)}>
              <Example />
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center z-40">
        <AnimatePresence>{open && <MenuList />}</AnimatePresence>
      </div>
    </>
  );
};
