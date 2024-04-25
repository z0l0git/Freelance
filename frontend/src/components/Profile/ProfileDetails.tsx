"use client";
import { CiLocationOn } from "react-icons/ci";
import { TbPointFilled } from "react-icons/tb";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
import Image from "next/image";

import CheckIcon from "@mui/icons-material/Check";
import { format } from "path";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

type Response = {
  _id: string;
  firstName: string;
  lastName: string;
  image: string;
  jobTitle: string;
  location: string;
  budget: string;
  email: string;
  auth: string;
  socials: [];
  skills: [];
  education: [];
  workExp: [];
  createdAt: string;
};

type PropsType = {
  data?: Response;
};

export const ProfileDetails = (props: PropsType) => {
  const { data } = props;

  const { rating } = useContext(DataContext);


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

  const FormatedDate = formatDate(
    data?.createdAt ? data?.createdAt.split("T")[0] : ""
  );

  return (
    <div className="w-[426px] h-fit items-center justify-around gap-[10px] border border-inherit   md:w-[816px] md:h-fit md:py-8 rounded-lg flex flex-col md:items-center md:justify-center ">
      <div className="w-[406px] h-fit flex-col px-5 py-5  bg-white  justify-between md:w-[774px] md:h-[145px] flex md:flex-row md:items-center md:justify-between md:pb-[24px]">
        <div className="flex justify-start md:items-center md:justify-center md:w-[100px] md:h-[100px]">
          <Image
            src={`${data?.image ? data.image : "/proq.webp"}`}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            className="rounded-full"
          />
        </div>

        <div className=" w-[320px] h-[155px] md:w-[616px] md:h-[145px]">
          <div className="md:w-[615px] md:h-[105px] md:flex md:flex-col md:justify-around">
            <strong className="text-[24px] font-semibold font-sans">
              {`  ${data?.firstName} ${data?.lastName}`}
            </strong>
            <p className="text-[16px] text-[#222E48] font-sans">
              {data?.jobTitle ? data?.jobTitle : "Frontend Developer"}
            </p>
          </div>
          <ul className="w-full h-[24px] flex flex-col md:flex-row justify-between ">
            <li className="flex gap-[10px] items-center">
              <CiLocationOn size={24} color="#0d47a1" />
              <p className="text-[16px] text-[#404A60] font-sans ">
                {data?.location ? data?.location : "Mongolia"}
              </p>
            </li>
            <li className="w-fit h-[24px] flex justify-around items-center gap-[10px] ">
              <TbPointFilled />
              <StarIcon className="text-[#febf58] " />
              <p>

                <span className="font-bold">{rating.stars}</span> (
                {rating.howMany})

              </p>
            </li>
            <li className="w-fit h-[24px] flex justify-around items-center gap-[10px] ">
              <TbPointFilled />
              <p>Member:</p>
              <p className="text-[#0D47A1]">{FormatedDate}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
