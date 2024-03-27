"use client";
import { IoMdSearch } from "react-icons/io";
import { HiArrowUpRight } from "react-icons/hi2";

import { IconType } from "react-icons";
import { Button } from "@/components/ui/button";

export const Search = () => {
  return (
    <button className="group relative px-[31px] py-[15px] overflow-hidden rounded-[100px] bg-[#f3a104] text-lg font-bold text-[#201b2f] flex items-center gap-2">
      Search
      <IoMdSearch />
      <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-[#2196f3] text-white flex items-center justify-center gap-2">
        Search
        <IoMdSearch />
      </div>
    </button>
  );
};
export const PostProject = () => {
  return (
    <button className="group relative px-[31px] py-[15px] overflow-hidden rounded-[100px] bg-[#0d47a1] text-lg font-bold text-white">
      Post A Project
      <div className=" inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-[#2196f3]  text-white flex items-center justify-center"></div>
    </button>
  );
};

export const Contact = () => {
  return <button className="text-white bg-black">Contact</button>;
};

export const BuyNow = () => {
  return (
    <button className="px-[20px] py-[5px]  text-white rounded-md bg-[#82b440] ">
      Buy now
    </button>
  );
};

export const ViewServices = () => {
  return (
    <button className="group relative px-[31px] py-[15px] overflow-hidden rounded-[100px] border-blue-500 border-[1px] text-lg font-bold text-[#0f48a2] flex items-center gap-1">
      View Services
      <HiArrowUpRight />
      <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-[#2196f3] text-white flex items-center justify-center">
        View Services
        <HiArrowUpRight />
      </div>
    </button>
  );
};

export const ListService = () => {
  return (
    <button className="group relative px-[31px] py-[15px] overflow-hidden rounded-[100px] border-blue-500  text-lg font-bold text-[#0f48a2] flex items-center gap-1 border-blue-500 border-[1px]">
      List A Service
      <HiArrowUpRight />
      <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-[#2196f3] text-white flex items-center justify-center">
        List A Service
        <HiArrowUpRight />
      </div>
    </button>
  );
};
