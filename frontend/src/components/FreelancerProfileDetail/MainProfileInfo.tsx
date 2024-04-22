"use client";
import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { ButtonWithBlueBorder } from "../Button";

type SetProDileype = {
  firstName: string;
  lastName: string;
  id: string;
  phone: string;
  location: string;
  createdAt: string;
  image: string;
};
type Response = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  discription: string;
  location: string;
  image?: string;
  jobTitle: string;
  budget: number;
};

type getDataType = {
  _id: string;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  auth: string;
  socials: [];
  skills: [];
  education: [];
  workExp: [];
  createdAt: string;
};
type PropsType = {
  profile: SetProDileype;
  data: Response;

};

export const MainProfileInfo = (props: PropsType) => {
  const { profile, data } = props;

  function formatDate(originalDate: string): string {
    const [yearStr, monthStr, dayStr] = originalDate.split("-");
    const year = parseInt(yearStr);
    const month = parseInt(monthStr);
    const day = parseInt(dayStr);
    const date = new Date(year, month - 1, day);

    const months: string[] = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthName: string = months[date.getMonth()];
    const formattedDate: string = `${monthName} ${day}, ${year}`;
    return formattedDate;
  }

  const FormatedDate = formatDate(profile?.createdAt.split("T")[0]);
  const UserName = profile.firstName + " " + profile.lastName;

  console.log(data.image, "imagee56");

  return (
    <div className="h-[488px] flex flex-col items-center gap-4 rounded-2xl border bg-white max-sm:px-2 sm:px-2">
      <div className="flex justify-center items-center p-4 ">
        <div className=" w-[200px] h-[200px] relative flex justify-center items-center p-4 rounded-full border z-10">
          <Image
            alt="user profile picture"
            src={`${profile?.image ? profile?.image : "/proq.webp"}`}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>
      <div className="w-full h-fit flex flex-col items-center justify-center gap-4">
        <div className="text-2xl font-bold ">{UserName}</div>

        <div className="text-base font-medium">{data?.jobTitle} </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <CiLocationOn />
            <div>{profile?.location}</div>
          </div>
          <div className="w-1 h-1 rounded-full bg-blue-800"></div>
          <div className="flex items-center gap-1">
            <FaStar color="orange" />
            <div className="xl:text-sm">4.8</div>
            <div className="xl:text-sm">(118)</div>
          </div>
          <div className="w-1 h-1 rounded-full bg-blue-800"></div>

          <div className="flex items-center">Member : {FormatedDate}</div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <MdOutlineAttachEmail />
            <div>{data?.email}</div>
          </div>
          <div className="w-1 h-1 rounded-full bg-blue-800"></div>

          <div className="flex items-center gap-1">
            <AiOutlinePhone />
            <div>{profile?.phone}</div>
          </div>
        </div>

        {/* <div className="flex gap-2">
          <div className="w-9 h-9 flex justify-center items-center rounded-full bg-gray-100 text-[#0D49A1] hover:bg-[#0D49A1] hover:text-white">
            <FaFacebook />
          </div>
          <div className="w-9 h-9 flex justify-center items-center rounded-full bg-gray-100 text-[#0D49A1] hover:bg-[#0D49A1] hover:text-white">
            <FaYoutube />
          </div>
          <div className="w-9 h-9 flex justify-center items-center rounded-full bg-gray-100 text-[#0D49A1] hover:bg-[#0D49A1] hover:text-white">
            <FaInstagram />
          </div>
          <div className="w-9 h-9 flex justify-center items-center rounded-full bg-gray-100 text-[#0D49A1] hover:bg-[#0D49A1] hover:text-white">
            <FaTwitter />
          </div>
          <div className="w-9 h-9 flex justify-center items-center rounded-full bg-gray-100 text-[#0D49A1] hover:bg-[#0D49A1] hover:text-white">
            <FaPinterest />
          </div>
        </div> */}

        {/* <div onClick={handlePush}>
        zow bol datagiin adg awaad profile page ruu usrene
          <ButtonWithBlueBorder buttonName="View Profile" />
        </div> */}
      </div>
    </div>
  );
};
