"use client";
import { FaStarOfLife } from "react-icons/fa";
import * as React from "react";
import Rating from "@mui/material/Rating";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { DataContext, useData } from "../context/DataContext";
import { BlueButton } from "../Button";
import { set } from "react-hook-form";

type Datatype = {
  stars?: number;
  description?: string;
  createdBy?: string;
  createdFor?: string;
};

type IdType = {
  searchParams: any;
};

type Comment = {
  stars: number | null;
  description: string;
};

export const RevieComment = (props: IdType) => {
  const { searchParams } = props;
  const { data: userData } = useContext(DataContext);

  console.log(userData, "dorjosda");

  const [comment, setComment] = useState<Comment>({
    stars: 0,
    description: "",
  });

  console.log(comment);

  const handleChange = async () => {
    try {
      const { data } = await axios.post<Datatype>(
        "http://localhost:8000/postreview",
        {
          stars: comment.stars,
          description: comment.description,
          createdBy: userData._id,
          createdFor: searchParams,
        }
      );
      window.location.reload();
      return data;
    } catch (err: any) {
      throw new Error(err.message);
    }
  };
  return (
    <div className="w-[382px] md:w-[816px] h-[718px] flex flex-col  justify-around">
      <strong className=" text-[24px] pb-6">Write Review</strong>
      <div className="w-[382px] md:w-[816px] pb-6">
        <div className="flex">
          <strong className="text-[20px] md:text-[24px] ">Name</strong>
          <FaStarOfLife width={10} height={24} className="text-[#0D47A1]" />
        </div>

        <div className="w-[362px] md:w-[816px] h-[47px] rounded-full flex items-center justify-center bg-white border border-black">
          {`${userData.firstName} ${userData.lastName}`}
        </div>
      </div>
      <div className="w-full pb-6">
        <div className="flex">
          <strong className="text-[20px] md:text-[24px] ">Email</strong>
          <FaStarOfLife width={10} height={24} className="text-[#0D47A1]" />
        </div>

        <div className="w-[362px] md:w-[816px]  h-[47px]  rounded-full flex items-center justify-center bg-white border border-black">
          {userData.email}
        </div>
      </div>
      <div className="w-full pb-6">
        <div className="flex">
          <strong className="text-[20px] md:text-[24px] ">Rating</strong>
          <FaStarOfLife width={10} height={24} className="text-[#0D47A1]" />
        </div>

        <div className="w-[362px] md:w-[816px]   h-[47px]  rounded-full flex items-center px-5 bg-white border border-black">
          <Rating
            name="simple-controlled"
            value={comment.stars}
            onChange={(event, newValue) => {
              setComment({ ...comment, stars: newValue });
            }}
          />
        </div>
      </div>
      <div className="w-full pb-6">
        <div className="flex">
          <strong className="text-[20px] md:text-[24px] ">Review</strong>
          <FaStarOfLife width={10} height={24} className="text-[#0D47A1]" />
        </div>
        <div className=" rounded-xl flex items-center justify-center bg-white border border-black">
          <textarea
            value={comment.description}
            onChange={(event) => {
              setComment({ ...comment, description: event.target.value });
            }}
            className="textarea textarea-bordered w-[330px] md:w-[780px]  h-[110px]"
          ></textarea>
        </div>
      </div>
      <BlueButton
        buttonName="Submit Reviews"
        height="80px"
        width="250px"
        handleSubmit={handleChange}
      />
    </div>
  );
};
