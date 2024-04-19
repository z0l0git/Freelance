"use client";
import React from "react";
import { BlueButton, WhiteButton } from "./Button";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
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

  return (
    <div className="w-full flex justify-start mx-auto items-center bg-[url(/bg.jpeg)] overflow-hidden mt-[-100px] mb-[-250px] z-40 max-sm:px-2 max-sm:w-[100%]  sm:w-[100%] sm:px-2 max-md:mx-auto md:justify-center ">
      <div className="flex w-[1280px] mx-auto justify-between gap-10 md:gap-2 items-center h-[513px] max-sm:flex-col max-sm:justify-center max-sm:items-start sm:mx-auto max-md:flex md:w-[540px] max-md:max-w-[540px] md:mx-auto md:flex xl:w-[990px]  max-xl:min-w-[875px]">
        <div className="w-6/12 flex flex-col justify-center items-left ">
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
        <div className="w-2/12 flex justify-center items-center max-sm:justify-start max-sm:w-4/12 sm:w-[30%] sm:justify-start md:">
          <div className={ImageClass}>
            <Image
              src={PictureOfPage}
              alt={pictureofalt}
              width={306}
              height={273}
            />
          </div>
          <WhiteButton
            buttonName={ButtonName}
            buttonClass={ButtonClass}
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
};
