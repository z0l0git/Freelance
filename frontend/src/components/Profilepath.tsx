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
  heightofHero: string;
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
    heightofHero,
  } = props;
  const handleLogout = () => {
    localStorage.deleteItem("token");
    localStorage.deleteItem("clerk-db-jwt");
    window.location.pathname = "/";
  };

  return (
    <div className="max-sm:px-2  sm:px-2 max-md:mx-auto md:justify-center w-screen flex justify-start items-center bg-[url(/bg.jpeg)] overflow-hidden mt-[-100px] mb-[-250px] z-40   ">
      <div
        className={`flex w-full mx-auto justify-around gap-10 md:gap-2 items-center ${heightofHero} max-sm:flex-col max-sm:justify-center  sm:mx-auto max-md:flex ]  md:mx-auto md:flex`}
      >
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
