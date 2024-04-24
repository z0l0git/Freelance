"use client";

import Image from "next/image";
import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import { BsChatLeftText } from "react-icons/bs";
import { homedir } from "os";

type FreelancerCard = {
  level: string;
  levelrank: string;
  image: string;
  name: string;
  worktype: string;

  wages: string;
  star: string;
  rating: number;
  howManyPeople: number;
};

export const FreelancerCard = (props: FreelancerCard) => {
  const {
    star,
    image,
    levelrank,
    name,
    worktype,

    wages,
    howManyPeople,
    rating,
  } = props;
  return (
    <div className="flex items-center justify-center w-[362px] md:w-[336px] sm:w-[336px] xl:w-[270px] cursor-pointer">
      <div
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;",
        }}
        className="flex flex-col sm:w-full items-center justify-center md:w-full md:h-[413px] xl:w-full xl:h-[411px] rounded-2xl px-6 py-7 border-2 border-solid  bg-slate-50 "
      >
        <div className="flex w-full h-6 justify-between mb-6">
          <div className="flex w-[88px] h-6 gap-1 items-center">
            <TiStarFullOutline size={25} color={"#ffbe57"} />
            <h6 className="text-base font-semibold">
              {rating}
              <span className="font-normal">{`(${howManyPeople})`}</span>{" "}
            </h6>
          </div>
        </div>
        <div className="flex items-center justify-center w-[140px] h-[140px] rounded-full mx-[80px] ">
          <Image
            src={`${image ? image : "/proq.webp"}`}
            alt=""
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
        <h2 className="w-full h-[50px] mt-5 pb-6 text-xl font-medium">
          {name}
        </h2>

        <div className="flex w-full h-[50px] items-center justify-between pt-5 border-dashed border-t-2 border-current">
          <span className="text-xl font-semibold text-[#0D47A1]">{wages}</span>
        </div>
      </div>
    </div>
  );
};
