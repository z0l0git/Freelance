"use client";
import * as React from "react";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { TbPointFilled } from "react-icons/tb";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import Rating from "@mui/material/Rating";

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
    <div className="w-fit h-[41px] flex justify-center items-center rounded-lg px-4 cursor-pointer bg-[#0D47A10D] font-semibold text-[#0D47A1] hover:text-[#2196F3]">
      {MySkills}
    </div>
  );
};

export const InfoDetailsMap = (props: any) => {
  const { year, topic, title, text } = props;
  return (
    <div className="w-[676px] h-[245px] bg-[#0D47A10D]  rounded-lg ">
      <div className=" w-[646px] flex flex-col justify-around gap-[10px] px-5 py-5 ">
        <div className="w-[128px] h-[40px] text-[#0D47A1] flex text-[16px] bg-white font-semibold  items-center justify-center  rounded-lg">
          {year}
        </div>
        <strong className="text-[20px] font-sans mb-4">{topic}</strong>
        <h1 className="text-[16px] text-[#2E7D32] font-sans mb-2">{title}</h1>
        <p className="text-[14px] font-sans w-[620px] ">{text}</p>
      </div>
    </div>
  );
};

export const TagsMap = (props: any) => {
  const { tag } = props;
  return (
    <div className="w-fit px-2 py-4 rounded-full flex items-center justify-center text-[14px] border border-gray-400 text-[#404A60] font-sans">
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
    <div className="w-[400px] h-[545px] py-4 flex flex-col items-center justify-between border border-inherit rounded-lg">
      <div className="w-[380px] h-[283px] cursor-pointer overflow-hidden rounded-2xl ">
        <Image
          alt=""
          src={image}
          width={380}
          height={283}
          className="transition ease-in-out delay-150 hover:-translate-1 hover:scale-125  duration-300 "
        />
      </div>
      <div className="w-[360px] h-[246px] flex flex-col justify-around  ">
        <div className="w-full h-[41px] flex items-center justify-between ">
          <div className="w-fit h-[41px] flex justify-center items-center rounded-lg px-4 cursor-pointer bg-[#0D47A10D] font-sans  font-semibold text-[#0D47A1] hover:text-[#2196F3]">
            {type}
          </div>
          <div className="w-[54px] h-[24px] text-[#2E7D32]">
            level{levelNum}
          </div>
        </div>
        <strong className="text-5 text-[#222E48] font-serif font-semibold">
          {topic}
        </strong>
        <div className="w-full h-[46px] flex items-center justify-between  ">
          <div className="w-[89px] flex justify-between items-center">
            <StarIcon className="text-[#febf58] " />
            <p>{rate}</p>
            <p>({rateNum})</p>
          </div>
          <div className="w-fit h-[25px] text-[#404A60]">
            <p className="text-[#0D47A1]">Active Order:{orderNum}</p>
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="w-fit h-[33px] flex items-center justify-between gap-[10px] ">
            <p>UserPic</p>
            <p>Username</p>
          </div>
          <div className="w-fit h-[25px] flex justify-between items-center">
            <p className="text-[#404A60] text-4">Starting:</p>
            <p className="text-[#0D47A1]">${price}</p>
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
      <input type="checkbox" className="checkbox rounded-lg" />
      <p>{text}</p>
    </div>
  );
};

export const RatingMap = (props: any) => {
  const { starNumber, width, percent } = props;
  return (
    <div className="w-[800px] h-[24px] flex items-center justify-between">
      <div className="w-[30px] h-[24px] flex items-center justify-between">
        <p> {starNumber}</p>

        <StarBorderOutlinedIcon
          className="rounded-lg`}>
          
      />"
        />
      </div>
      <div className="w-[700px] h-[12px] bg-[#DFE0E4] rounded-lg">
        <div className={`${width} h-[12px] bg-[#F3A102] rounded-lg`}></div>
      </div>
      <div>{percent}</div>
    </div>
  );
};

export const ReviewMap = (props: any) => {
  const { date, time, image, text, name, jobType, likeNum } = props;
  const [value, setValue] = React.useState<number | null>(5);
  const [open, setOpen] = React.useState(false);

  const handleComment = () => {
    setOpen(!open);
  };
  return (
    <div className="w-[800px]  flex flex-col justify-between py-5 px-5 rounded-lg bg-[#0D47A10D] ">
      <div className="w-[752px] h-[52px] gap-[20px] flex">
        {date}
        <TbPointFilled />
        {time}
      </div>
      <div className="w-[752px]">
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <p className="">{text}</p>
        <div className="w-[752px] flex gap-[20px] pt-5 ">
          <Image
            src={image}
            alt=""
            width={60}
            height={60}
            className="rounded-full w-[60px] h-[60px]"
          />
          <div className="w-[149px] flex flex-col">
            <strong className="text-[20px] w-[200px]">{name}</strong>
            <p className="text-[16px]">{jobType}</p>
          </div>
        </div>
        <div className="w-[752px] flex py-6 gap-[20px]">
          <div className="flex items-center text-[#0D47A1]">
            <ThumbUpOutlinedIcon className="w-[20px] h-[20px]" />
            {likeNum}
          </div>
          <div
            className="flex items-center text-[#0D47A1] cursor-pointer"
            onClick={() => {
              handleComment();
            }}
          >
            <MessageOutlinedIcon className="w-[20px] h-[20px]" />
            <p className="text-[18px] ">Replay</p>
          </div>
        </div>
      </div>
      {open && (
        <div className="w-[752px] flex items-center justify-between ">
          <Image
            src={"/profile2.png"}
            alt=""
            width={60}
            height={60}
            className="rounded-full w-[60px] h-[60px]"
          />
          <div className="w-[678px] h-[62px] rounded-xl flex items-center justify-center bg-white border border-black">
            <input
              className="w-[642px] h-[42px] border-transparent"
              type="text"
              placeholder="Join the discussion..."
            />
          </div>
        </div>
      )}
    </div>
  );
};
