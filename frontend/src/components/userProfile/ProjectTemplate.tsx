"use client";

import Image from "next/image";
import React, { MouseEvent, useState } from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { create } from "domain";

type ProjectCard = {
  title?: String;
  price?: String;
  description?: String;
  category?: string[];
  createdby?: String;
  flexible?: Boolean;
  profilePicture?: string;
  getIdforDelete: (event: MouseEvent<HTMLDivElement>) => void;
  id: string;
  editProject: (event: MouseEvent<HTMLDivElement>) => void;
  createdAt: string | undefined;
};

export const ProjectTemplate = (props: ProjectCard) => {
  const {
    title,
    price,
    description,
    category,
    createdby,
    flexible,
    profilePicture,
    getIdforDelete,
    id,
    editProject,
    createdAt,
  } = props;

  const [tempo, setTempo] = useState("");

  function formatDate(dateString: string): string {
    const [year, month, day] = dateString.split("-");

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
    const monthName: string = months[parseInt(month, 10) - 1];

    return `${monthName} ${parseInt(day, 10)}, ${year}`;
  }

  const formattedDate: string = formatDate(
    createdAt ? createdAt.split("T")[0] : ""
  );

  return (
    <div className="flex flex-col  rounded-2xl h-fit ">
      <div className="flex flex-col rounded-xl p-8 pb-0 bg-slate-50 w-[720px]">
        <div className="flex flex-col gap-3 h-fit mb-6">
          <div className="flex justify-between ">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <h5 className="text-xl font-bold  text-[#0d47a1]">
              <span className="font-normal text-black">
                {flexible ? "Flexible: " : "Fixed: "}
              </span>
              {price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}₮
            </h5>
          </div>
          <div className="flex  gap-5 justify-stretch w-full h-fit mb-6 flex-wrap">
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
          <div className="flex w-full justify-between">
            <h6 className="text-base">{description}</h6>
            <div className="text-[30px]  mt-[-20px] ">
              <div className=" ">
                <div id={id} onClick={getIdforDelete}>
                  <MdOutlineDeleteSweep className="cursor-pointer" />
                </div>
              </div>
              <div onClick={editProject} id={id}>
                <BiEditAlt className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end font-bold">{formattedDate}</div>
    </div>
  );
};
