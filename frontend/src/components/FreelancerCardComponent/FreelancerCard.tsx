"use client";

import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import { BsChatLeftText } from "react-icons/bs";

type FreelancerCard = {
  star: string;
  level: string;
  levelrank: string;

  name: string;
  worktype: string;
  experience: string;
  wages: string;
};

export const FreelancerCard = (props: FreelancerCard) => {
  const { star, level, levelrank, name, worktype, experience, wages } = props;
  return (
    <div className="flex items-center justify-center w-[362px] md:w-[336px] sm:w-[336px] xl:w-[270px]  ">
      <div
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;",
        }}
        className="flex flex-col sm:w-full items-center justify-center md:w-full md:h-[413px] xl:w-full xl:h-[411px] rounded-2xl px-6 py-7 border-2 border-solid  bg-slate-50 "
      >
        <div className="flex w-full h-6 justify-between mb-6">
          <div className="flex w-[88px] h-6 gap-2">
            <FaStar
              className="flex w-5 h-5 justify-center items-center "
              color="#ffbe57"
            />
            <h6 className="text-base font-semibold">{star}</h6>
            <h6>{levelrank}</h6>
          </div>
          <h6 className="flex items-center justify-center text-lg font-bold text-[#2E7D32]">
            {level}
          </h6>
        </div>
        <div className="flex items-center justify-center w-[140px] h-[140px] rounded-full mx-[80px] ">
          <Image src="/f6.png" alt="" width={140} height={140} />
        </div>
        <h2 className="w-full h-[50px] mt-5 pb-6 text-xl font-medium">
          {name}
        </h2>
        <div className="flex w-full h-[45px] justify-between pb-5">
          <div className="flex justify-center items-center gap-1">
            <BsStopwatch className="flex w-4 h-4 " />
            <span>{worktype}</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            <MdOutlineSignalCellularAlt className="flex w-4 h-4 justify-center items-center" />
            <span>{experience}</span>
          </div>
        </div>
        <div className="flex w-full h-[50px] items-center justify-between pt-5 border-dashed border-t-2 border-current">
          <span className="text-xl font-semibold text-[#0D47A1]">{wages}</span>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100">
            <BsChatLeftText />
          </div>
        </div>
      </div>
    </div>
  );
};
