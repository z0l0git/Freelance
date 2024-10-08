"use client";
import { FaStarOfLife } from "react-icons/fa";
import * as React from "react";
import Rating from "@mui/material/Rating";
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { DataContext, useData } from "../context/DataContext";
import { BlueButton } from "../Button";

import { set } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";

import { useRouter } from "next/navigation";

type Datatype = {
  stars?: number;
  description?: string;
  createdBy?: string;
  createdFor?: string;
};

type stateType = {
  _id: string;
  createdFor: string;
  stars: number;
  createdAt: Date;
  description: string;
  createdBy: string;
};

type IdType = {
  searchParams: any;
  name: string;
  setRdata: React.Dispatch<React.SetStateAction<stateType[]>>;
  rdata: stateType[];
};

export type Comment = {
  stars: number | null;
  description: string;
};

export const RevieComment = (props: IdType) => {
  const { push } = useRouter();

  const { searchParams, name, setRdata, rdata } = props;
  const { data: userData, isLoggedIn } = useContext(DataContext);

  console.log(userData, "userDatsssssa");

  const [comment, setComment] = useState<Comment>({
    stars: 0,
    description: "",
  });

  const notifySuccess = () => {
    toast.success("🦄 Changes applied successfully.", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const notifyError = () => {
    toast.error("You have already posted this review❗", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  const notifyError2 = () => {
    toast.error("Something went wrong. Sorry try again❗", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const PushLogin = () => {
    push("/sign");
  };

  const handleChange = async (e: any) => {
    e.preventDefault();
    try {
      const filterData = rdata?.find(
        (item: any) => item.createdBy._id === userData._id
      );
      console.log(filterData, "pbikbbpkjjjjjjjjj");

      if (filterData) {
        console.log("if filter data log");

        notifyError();
      } else {
        const { data } = await axios.post(
          "https://freelance-gmjr.onrender.com/postreview",
          {
            stars: comment.stars,
            description: comment.description,
            createdBy: userData._id,
            createdFor: searchParams,
          }
        );
        const reviews = await axios.post<any[]>(
          "https://freelance-gmjr.onrender.com/getallreview",
          {
            createdFor: searchParams,
          }
        );

        setRdata(reviews.data);
        // console.log(data, "revdata");

        // setRdata((prev: Datatype[]) => [...prev, data]);
        notifySuccess();
      }
    } catch (err: any) {
      notifyError2();
      console.log(err.message);
    }
  };
  return (
    <div className="w-[382px] md:w-[816px] h-fit py-[40px] flex flex-col justify-center">
      <ToastContainer />
      <strong className="w-full text-center text-[24px] pb-6">
        Write A Review for <span className="text-[#0D47A1]">{name}</span>
      </strong>
      <div className="w-full pb-6">
        <div className="flex">
          <strong className="text-[20px] md:text-[24px] ">Rating</strong>
          <FaStarOfLife width={10} height={24} className="text-[#0D47A1]" />
        </div>

        <div className="w-[362px] md:w-[816px] h-[47px] rounded-full flex items-center px-5 bg-white border border-black">
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
            value={comment?.description}
            onChange={(event) => {
              setComment({ ...comment, description: event.target.value });
            }}
            className="textarea textarea-bordered w-full rounded-xl  h-[110px]"
          ></textarea>
        </div>
      </div>
      {isLoggedIn ? (
        <BlueButton
          buttonName={"Submit Review"}
          height="80px"
          width="250px"
          handleSubmit={handleChange}
        />
      ) : (
        <p>
          Please{" "}
          <a className="text-blue-600" href="/sign">
            Log In
          </a>{" "}
          to post a review
        </p>
      )}
    </div>
  );
};
