"use client";

import React, { useContext, useEffect, useState } from "react";

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
import { useRouter } from "next/navigation";

export const Menu = () => {
  const { push } = useRouter();
  const [open, setOpen] = useState(false);
  const [openBell, setOpenBell] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const { isLoggedIn, data } = useContext(DataContext);
  const [profile, setProfile] = useState(false);

  const handleClick = () => {
    setOpenBell(!openBell);
    setOpenProfile(false);
  };
  const handlePush = () => {
    push("/");
  };
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     setProfile(true);
  //   } else {
  //     setProfile(false);
  //   }
  // }, [isLoggedIn]);

  return (
    <div className="sticky top-0 z-40">
      <div
        className={`py-4 flex justify-around z-50 sticky top-0 bg-[#13203B] w-screen z-50`}
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
              onClick={handlePush}
            />
            <div className="flex items-center gap-[6%] w-full">
              <Link href={"/projects"}>
                <WhiteButton
                  buttonName="Projects"
                  buttonClass="text-white hover:text-blue-500 hover:underline text-nowrap w-fit"
                />
              </Link>
              <Link href={"/freelancers"}>
                <WhiteButton
                  buttonName="Freelancers"
                  buttonClass="text-white hover:text-blue-500 hover:underline text-nowrap w-fit"
                />
              </Link>

              <Link href={"/contact"}>
                <WhiteButton
                  buttonName="Contact"
                  buttonClass="text-white hover:text-blue-500 hover:underline text-nowrap w-fit"
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
            {/* <nav className="flex justify-center items-center p-2 rounded-full bg-[#343e56] w-10 h-10 relative">
              <BsBell
                className="color-white text-white w-6 h-6"
                onClick={handleClick}
              />
              <nav className="rounded-xl overflow-hidden ">
                {openBell ? (
                  <div className="w-[306px] h-[274px] bg-white py-6 px-5 absolute top-12 right-0 rounded-xl">
                    <MenuNotificationCard
                      userName="Ganaa"
                      createdDate={DataView}
                      profilePicture="/f10.png"
                    />
                  </div>
                ) : (
                  ""
                )}
              </nav>
            </nav> */}

            <nav className="flex justify-center items-center rounded-full relative w-10 h-10 ">
              {isLoggedIn ? (
                <MenuProfileCard
                  profilePicture={`${data.image ? data?.image : "/proq.webp"}`}
                  setOpenBell={setOpenBell}
                  openProfile={openProfile}
                  setOpenProfile={setOpenProfile}
                  userName={data.firstName + " " + data.lastName}
                  userMail={data.email}
                  userPhone={data.phone}
                />
              ) : (
                <Link href="/sign">
                  <WhiteButton
                    buttonName="Log In"
                    buttonClass="text-white hover:text-blue-500 hover:underline text-nowrap w-fit"
                  />
                </Link>
              )}
            </nav>
            <div className="md:hidden" onClick={() => setOpen(!open)}>
              <Example />
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center z-40">
        <AnimatePresence>{open && <MenuList />}</AnimatePresence>
      </div>
    </div>
  );
};
