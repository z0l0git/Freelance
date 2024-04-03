"use client";
import { FaStarOfLife } from "react-icons/fa";
import * as React from "react";
import Rating from "@mui/material/Rating";

export const RevieComment = () => {
  const [value, setValue] = React.useState<number | null>(0);
  return (
    <div className="w-[816px] h-[718px] flex flex-col  justify-around">
      <strong className="text-[24px] pb-6">Write Review</strong>
      <div className="w-full pb-6">
        <div className="flex">
          <strong className="text-[24px] ">Name</strong>
          <FaStarOfLife width={10} height={24} className="text-[#0D47A1]" />
        </div>

        <div className="w-[816px] h-[47px] rounded-xl flex items-center justify-center bg-white border border-black">
          <input
            className="w-[780px] h-[32px] border-transparent"
            type="text"
            placeholder="Join the discussion..."
          />
        </div>
      </div>
      <div className="w-full pb-6">
        <div className="flex">
          <strong className="text-[24px] ">Email</strong>
          <FaStarOfLife width={10} height={24} className="text-[#0D47A1]" />
        </div>

        <div className="w-[816px] h-[47px] rounded-xl flex items-center justify-center bg-white border border-black">
          <input
            className="w-[780px] h-[32px] border-transparent"
            type="text"
            placeholder="Join the discussion..."
          />
        </div>
      </div>
      <div className="w-full pb-6">
        <div className="flex">
          <strong className="text-[24px] ">Rating</strong>
          <FaStarOfLife width={10} height={24} className="text-[#0D47A1]" />
        </div>

        <div className="w-[816px] h-[47px] rounded-xl flex items-center px-5 bg-white border border-black">
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
      </div>
      <div className="w-full pb-6">
        <div className="flex">
          <strong className="text-[24px] ">Review</strong>
          <FaStarOfLife width={10} height={24} className="text-[#0D47A1]" />
        </div>

        <div className=" rounded-xl flex items-center justify-center bg-white border border-black">
          <textarea className="textarea textarea-bordered w-[816px] h-[110px]"></textarea>
        </div>
      </div>
    </div>
  );
};
