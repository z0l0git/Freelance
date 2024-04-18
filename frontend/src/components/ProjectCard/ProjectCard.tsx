"use client";

import Image from "next/image";
import React from "react";

type ProjectCard = {
  title?: String;
  price?: String;
  description?: String;
  category?: string[];
  createdby?: String;
  flexible?: Boolean;
  profilePicture?: string;
};

export const ProjectCard = (props: ProjectCard) => {
  const {
    title,
    price,
    description,
    category,
    createdby,
    flexible,
    profilePicture,
  } = props;

  return (
    <div className="flex bg-slate-100 rounded-2xl h-fit cursor-pointer">
      <div className="flex flex-col rounded-xl p-8 pb-0 bg-slate-50 w-[720px]">
        <div className="flex flex-col gap-3 h-fit mb-6">
          <div className="flex justify-between ">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <h5 className="text-xl font-bold  text-[#0d47a1]">
              <span className="font-normal text-black">
                {flexible ? "Flexible: " : "Fixed: "}
              </span>
              {price}₮
            </h5>
          </div>
          <div className="flex gap-10 justify-stretch w-full h-[41px] mb-6">
            {category?.map((element, index) => {
              return (
                <div
                  key={index}
                  className="flex w-fill h-[41px] py-2 px-4 border-inherit bg-slate-200 border-solid rounded-xl text-base font-bold text-[#0d47a1] hover:text-blue-500"
                >
                  {element}
                </div>
              );
            })}
          </div>
          <div className="flex w-full rounded-xl">
            <h6 className="text-base">{description}</h6>
          </div>
        </div>

        <div className="flex w-full h-fit gap-2 items-center border-t border-dashed border-slate-500 py-5">
          <Image
            alt="user picture"
            src={`${profilePicture ? profilePicture : "/proq.webp"}`}
            width={40}
            height={40}
            className="rounded-full"
          />
          <span>{createdby}</span>
        </div>
      </div>
    </div>
  );
};
