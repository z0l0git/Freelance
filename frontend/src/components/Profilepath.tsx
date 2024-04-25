"use client";
import React from "react";
import { BlueButton, WhiteButton } from "./Button";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/navigation";
type Props = {
  PageBigName: string;
  Home: string;
  PageLinkName: string;
  PageLink: string;
  LandingPage: string;
  ButtonName: string;
  ButtonClass: string;
  PictureOfPage: string;
  pictureofalt: string;
  ImageClass: string;
};
export const PageHeroes = (props: Props) => {
  const {
    PageBigName,
    Home,
    PageLinkName = "",
    PageLink = "",
    LandingPage,
    ButtonName = "",
    ButtonClass = "",
    PictureOfPage = "",
    pictureofalt = "",
    ImageClass = "",
  } = props;
  const handleLogout = () => {
    localStorage.deleteItem("token");
    localStorage.deleteItem("clerk-db-jwt");
    window.location.pathname = "/";
  };
  const { push } = useRouter();
  const handleLogOut = () => {
    localStorage.clear();
    // push("/projects");
    push("/sign");
  };

  return (
    <div className="w-screen flex justify-start items-center bg-[url(/bg.jpeg)] overflow-hidden mt-[-100px] mb-[-250px] z-40 max-sm:px-2  sm:px-2 max-md:mx-auto md:justify-center ">
      <div className="flex w-full mx-auto justify-around gap-10 md:gap-2 items-center h-[513px] max-sm:flex-col max-sm:justify-center  sm:mx-auto max-md:flex ]  md:mx-auto md:flex ">
        <div className=" flex flex-col justify-center items-left ">
          <h1 className="text-6xl font-semibold text-white max-sm:text-4xl text-nowrap max-md:text-4xl ">
            {PageBigName}
          </h1>
          <div className="flex items-center gap-2 max-sm:w-screen max-sm:gap-1 ">
            <Link href="/">
              <span className="text-white font-normal text-nowrap">{Home}</span>
            </Link>
            <IoIosArrowForward className="text-white font-semibold " />
            <Link href={PageLink}>
              <span className="text-white font-normal text-nowrap">
                {PageLinkName}
              </span>
            </Link>
            <IoIosArrowForward className="text-white font-semibold" />
            <span className="text-[#f3a102] hover:text-[#0a58ca] hover:cursor-pointer font-normal text-nowrap">
              {LandingPage}
            </span>
          </div>
        </div>
        <div className="max-sm:justify-start sm:justify-start flex justify-center items-center ">
          <div className={ImageClass}>
            <Image
              src={PictureOfPage}
              alt={pictureofalt}
              width={306}
              height={273}
            />
          </div>
          <div>
            <div
              onClick={handleLogOut}
              className={`${ButtonClass} bg-gradient-to-r from-indigo-700 cursor-pointer rounded-2xl border-2 border-dashed border-black  px-6 py-3 font-semibold uppercase text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none`}
            >
              Log out
            </div>
          </div>
          {/* <WhiteButton
            buttonName={ButtonName}
            buttonClass={ButtonClass}
            onClick={handleLogout}
          /> */}
        </div>
      </div>
    </div>
  );
};
