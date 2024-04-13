"use client";

import React, { useContext, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuMessageCard, MenuNotificationCard } from "./MenuMessageCard";

import { BsChatText, BsBell } from "react-icons/bs";
import { MenuProfileCard } from "./MenuProfileCard";
import { WhiteButton } from "../Button";
import { AnimatePresence } from "framer-motion";

import Image from "next/image";
import { Example } from "./MenuToggle";
import { MenuList } from "./MenuList";
import { DataContext } from "../context/DataContext";
import Link from "next/link";
import { motion } from "framer-motion";

const tabs = ["Projects", "Freelancers", "Contact"];
const tabref = [
  { text: "Projects", link: "/projects" },
  { text: "Freelancers", link: "/freelancers" },
  { text: "Contact", link: "/contact" },
];

export const Menu = () => {
  const [open, setOpen] = useState(false);
  const { isLoggedIn } = useContext(DataContext);
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <>
      <div
        className={`py-4 flex justify-around z-50 sticky top-0 border-b-2 border-solid border-white w-screen`}
      >
        <div className=" w-full mx-auto px-3 flex md:justify-around justify-between items-center gap-4">
          <Image
            src={"/logoSquare.png"}
            alt="logo"
            width={40}
            height={30}
            className="md:hidden"
          />
          <div className="hidden md:flex flex gap-[5%] relative justify-start items-center w-fit">
            <Image
              src="/logo.png"
              alt="Google"
              width={186}
              height={49}
              className="cursor-pointer"
              onClick={() => window.location.replace("/")}
            />
            <div className="flex items-center gap-[6%] w-full">
              <Link href={"/projects"}>
                <WhiteButton
                  buttonName="Browse Projects"
                  buttonClass="text-white hover:text-blue-500 hover:underline"
                />
              </Link>
              <Link href={"/freelancers"}>
                <WhiteButton
                  buttonName="Find Freelancers"
                  buttonClass="text-white hover:text-blue-500 hover:underline"
                />
              </Link>

              <Link href={"/contact"}>
                <WhiteButton
                  buttonName="Contact"
                  buttonClass="text-white hover:text-blue-500 hover:underline"
                />
              </Link>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div
              className="flex justify-center items-center p-2 rounded-full  bg-[#343e56] w-10 h-10 cursor-pointer"
              onClick={() => window.location.replace("/chat")}
            >
              <BsChatText className="color-white text-white w-6 h-6" />
            </div>

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
              <div className="flex justify-center items-center rounded-full ">
                {isLoggedIn ? (
                  <MenuProfileCard profilePicture="/f10.png" />
                ) : (
                  <Link href="/sign">
                    <WhiteButton
                      buttonName="Log In"
                      buttonClass="text-white hover:text-blue-500 hover:underline "
                    />
                  </Link>
                )}
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
