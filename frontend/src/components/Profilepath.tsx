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
    localStorage.removeItem("Token");
    window.location.pathname = "/";
  };

  return (
    <div className="w-full flex justify-start mx-auto  items-center md:flex-col bg-[url(/bg.jpeg)] mt-[-100px] mb-[-250px] z-30">
      <div className="flex w-[1200px] mx-auto justify-between gap-10 items-center h-[513px] ">
        <div className="w-6/12 flex flex-col justify-center items-left">
          <h1 className="text-6xl font-semibold text-white">{PageBigName}</h1>
          <div className="flex items-center">
            <Link href="/">
              <span className="text-white font-normal">{Home}</span>
            </Link>
            <IoIosArrowForward className="text-white font-semibold" />
            <Link href={PageLink}>
              <span className="text-white font-normal">{PageLinkName}</span>
            </Link>
            <IoIosArrowForward className="text-white font-semibold" />
            <span className="text-white font-normal">{LandingPage}</span>
          </div>
        </div>
        <div className="w-2/12 flex justify-start items-center">
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
