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
  function formatYear(originalDate: string): string {
    const [yearStr] = originalDate.split("-");
    const year = parseInt(yearStr);
    const date = new Date(year);
    const formattedYear: string = `${year}`;
    return formattedYear;
  }

  const FormatedYear = formatYear(profile?.createdAt.split("T")[0]);
  const FormatedDate = formatDate(profile?.createdAt.split("T")[0]);
  const UserName = profile.firstName + " " + profile.lastName;

  console.log(data.image, "imagee56");

  return (
    <div className="max-h-fit p-8 max-w-full  flex flex-col items-center gap-4 max-md:gap-2 rounded-2xl border bg-white max-md:w-full max-md:h-fit max-md:py-4 max-sm:px-2 sm:px-2">
      <div className="flex justify-center items-center p-4 max-md:min-h-3/12 max-md:min-w-3/12 ">
        <div className="w-5/12 h-5/12 relative flex justify-center items-center p-4 max-md:p-2 rounded-full border z-10 ">
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
      <div className="w-full h-fit flex flex-col items-center justify-center gap-8 max-md:gap-2 ">
        <div className="text-2xl font-bold max-w-10/12 max-md:text-md">
          {UserName}
        </div>

        <div className="text-base font-medium max-w-10/12">
          {data?.jobTitle}{" "}
        </div>
        <div className="flex items-center gap-1 max-w-full">
          <div className="flex items-center gap-1">
            <CiLocationOn />
            <div className="text-sm">{profile?.location}</div>
          </div>
          <div className="w-1 h-1 rounded-full bg-blue-800"></div>
          <div className="flex items-center gap-1">
            <FaStar color="orange" />
            <div className="xl:text-sm">4.8</div>
            <div className="xl:text-sm">(118)</div>
          </div>
          <div className="w-1 h-1 rounded-full bg-blue-800"></div>

          <div className="flex items-center text-sm text-nowrap">
            Member : {FormatedYear}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <MdOutlineAttachEmail />
            <div className="text-sm">{data?.email}</div>
          </div>
          <div className="w-1 h-1 rounded-full bg-blue-800"></div>

          <div className="flex items-center gap-1">
            <AiOutlinePhone />
            <div className="text-sm">{profile?.phone}</div>
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
