"use client";
import * as React from "react";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { Comment } from "./ReviewComment";
import Rating from "@mui/material/Rating";
import { CheckCircle } from "../ui/checkcircle";
import { useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import axios from "axios";

export const DetailsMap = (props: any) => {
  const { icon, topic, text, color } = props;
  return (
    <div className="w-fit h-[54px] gap-[20px] pl-5  flex items-center  justify-between ">
      <div
        className={`w-[40px] h-[40px] ${color}  flex items-center justify-around rounded-full`}
      >
        {icon}
      </div>
      <div className="w-fit h-[54px] gap-[10px] flex flex-col">
        <p className="text-[12px]"> {topic} </p>
        <p className="text-[16px]">{text}</p>
      </div>
    </div>
  );
};

export const SkillsMap = (props: any) => {
  const { MySkills } = props;

  return (
    <div className="w-fit h-[38px] md:h-[41px] flex justify-center items-center rounded-lg px-4 cursor-pointer bg-[#0D47A10D] font-semibold text-[#0D47A1] hover:text-[#2196F3]">
      {MySkills}
    </div>
  );
};

export const InfoDetailsMap = (props: any) => {
  const { year, topic, title, text, index } = props;
  return (
    <div className="flex flex-col justify-between w-[362px] items-center h-[399px] md:flex-row md:w-[816px] md:h-[245px]  ">
      <div className="w-[100px] h-full flex items-center justify-center ">
        <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center border border-dashed border-[#0D47A1]">
          <div className="w-[78px] h-[78px] rounded-full flex items-center justify-center text-white bg-[#0D47A1] text-[40px]">
            {index + 1}
          </div>
        </div>
      </div>
      <div className="w-[362px] h-fit md:w-[676px]  bg-[#0D47A10D]  rounded-lg ">
        <div className=" w-full md:w-[646px] flex flex-col justify-around gap-[10px] px-5 py-5 ">
          <div className="w-[128px] h-[40px] text-[#0D47A1] flex text-[14px] md:text-[16px] bg-white font-semibold  items-center justify-center  rounded-lg">
            {year}
          </div>
          <strong className="text-[18px] md:text-[20px] font-sans mb-4">
            {topic}
          </strong>
          <h1 className="text-[14px] md:text-[16px] text-[#2E7D32] font-sans mb-2">
            {title}
          </h1>
          <p className="text-[14px] font-sans w-[332px] md:w-[620px] ">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export const TagsMap = (props: any) => {
  const { tag } = props;
  return (
    <div className="w-fit px-2 py-2 rounded-full flex items-center justify-center text-[14px] border border-gray-400 text-[#404A60] font-sans">
      {tag}
    </div>
  );
};

export const LinkMap = (props: any) => {
  const { linkIcon } = props;
  return (
    <div className="w-9 h-9 border border-black rounded-full flex items-center justify-center">
      {linkIcon}
    </div>
  );
};

export const ServiceMap = (props: any) => {
  const { image, type, levelNum, topic, rate, rateNum, orderNum, price } =
    props;
  return (
    <div className="w-[362px] h-[450px] md:w-[400px] md:h-[545px] py-4 flex flex-col items-center justify-between border border-inherit rounded-lg">
      <div className="w-[346px] h-[260px] md:w-[380px] md:h-[283px] cursor-pointer overflow-hidden rounded-2xl ">
        <Image
          alt=""
          src={image}
          width={380}
          height={283}
          className="transition ease-in-out delay-150 hover:-translate-1 hover:scale-125  duration-300 "
        />
      </div>
      <div className="w-[360px] h-[246px] flex flex-col justify-center gap-[10px]  ">
        <div className="w-full h-[41px] flex items-center justify-between ">
          <div className="w-fit h-[41px] flex justify-center items-center rounded-lg px-4 cursor-pointer bg-[#0D47A10D] font-bold text-[#0D47A1] hover:text-[#2196F3]">
            {type}
          </div>
          <div className="w-[54px] h-[24px] text-[#2E7D32] font-bold">
            Level {levelNum}
          </div>
        </div>
        <strong className="text-[20px] text-[#222E48] font-bold">
          {topic}
        </strong>
        <div className="w-full h-[46px] flex items-center justify-between  ">
          <div className="w-[89px] flex justify-between items-center">
            <StarIcon className="text-[#febf58] " />
            <p className="font-bold">{rate}</p>
            <p>({rateNum})</p>
          </div>
          <div className="w-fit h-[25px] text-[#404A60]">
            <p className="text-[#0D47A1]">
              Active Order:<span className="font-bold"> {orderNum}</span>
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="w-fit h-[33px] flex items-center justify-between gap-[10px] ">
            <p>UserPic</p>
            <p className="font-bold">Username</p>
          </div>
          <div className="w-fit h-[25px] flex justify-between items-center">
            <p className="text-[#404A60] text-4">Starting:</p>
            <p className="text-[#0D47A1] font-bold">${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CheckBoxMap = (props: any) => {
  const { text } = props;
  return (
    <div className="w-full h-[32px] flex items-center gap-[10px]">
      <CheckCircle className="checkbox rounded-lg" />
      <p>{text}</p>
    </div>
  );
};

export const ReviewMap = ({ userData }: any) => {
  const date = new Date(userData?.createdAt);
  const newdate = date.toUTCString();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const time = `${hours}:${minutes}`;

  return (
    <div className="w-[382px] md:w-[800px]  flex flex-col justify-between py-5 px-5 rounded-lg bg-[#0D47A10D] border-top">
      <div className="w-[752px] h-[52px] gap-[20px] flex">
        {newdate?.slice(4, 16)} <span>{time}</span>
      </div>
      <div className="w-[354px] md:w-[752px]">
        <Rating name="read-only" value={userData?.stars} readOnly />
        <p className="text-[14px]">{userData?.description}</p>
        <div className="w-[354px] md:w-[752px] flex gap-[20px] pt-5 ">
          <Image
            src={userData?.createdBy?.image}
            alt=""
            width={60}
            height={60}
            className="rounded-full w-[60px] h-[60px]"
          />
          <div className="w-[149px] flex flex-col">
            <strong className="text-[20px] w-[200px]">
              {`${userData?.createdBy?.firstName} ${userData?.createdBy?.lastName}`}
            </strong>
            <p className="text-[14px] md:text-[16px]">
              {userData?.createdBy?.jobTitle}
            </p>
          </div>
        </div>
        <div className="w-[752px] flex py-6 gap-[20px]">
          <div className="flex items-center text-[#0D47A1] gap-[10px]"></div>
        </div>
      </div>
    </div>
  );
};
