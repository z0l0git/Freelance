"use client";

import React from "react";
import { BlueButton } from "../Button";



type ProjectCard = {
  title: String;
  price: String;
  description: String;
  category: string[];
  expire: String;
  location: String;
  level: String;
  proporsal: String;
};

export const ProjectCard = (props: ProjectCard) => {
  const {
    title,
    price,
    description,
    category,
    expire,
    location,
    level,
    proporsal,
  } = props;
  return (
    <div className="flex w-screen h-screen justify-center items-center bg-slate-100">
      <div className="flex flex-col w-[856px] h-[432px] rounded-xl p-8 bg-slate-50">
        <div className="flex flex-col w-[792px] gap-3 h-[40px] mb-6">
          <div className="flex justify-between ">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <h5 className="text-2xl font-light">{price}</h5>
          </div>
          <div className="flex gap-10 justify-stretch w-full h-[41px] mb-6">
            {category?.map((el, i) => {
              return (
                <div
                  key={i}
                  className="flex w-fill h-[41px] py-2 px-4 border-inherit bg-slate-100 border-solid rounded-xl text-base font-bold text-[#0d47a1]"
                >
                  {el}
                </div>
              );
            })}
          </div>
          <div className="flex w-full rounded-xl pb-6">
            <h6 className="text-base">{description}</h6>
          </div>
          <div className="flex w-full h-[49px] pb-6">
            <div className="flex w-full h-full text-base ">
              <h5>{expire}</h5>
              <h4 className="text-base font-bold">27 days</h4>
            </div>
            <div className="flex w-full h-full text-base ">
              <h5>{location}</h5>
              <h4 className="text-base font-bold">Remote</h4>
            </div>
            <div className="flex w-full h-full text-base ">
              <h5>{level}</h5>
              <h4 className="text-base font-bold">Senior</h4>
            </div>
            <div className="flex w-full h-full text-base ">
              <h5>{proporsal}</h5>
              <h4 className="text-base font-bold">76 received</h4>
            </div>
          </div>
          <div className="flex w-full h-[70px] justify-between pt-6">
            <div>
              <span>Abstergo LLC verified</span>
            </div>
            <div>
              <BlueButton buttonName="Send proporsal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
