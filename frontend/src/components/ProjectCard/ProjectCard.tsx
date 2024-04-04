"use client";

import React from "react";
import { BlueButton } from "../Button";
import { CheckCircle } from "../../components/ui/checkcircle";

type ProjectCard = {
  title: String;
  price: String;
  description: String;
  category: string[];
  expire: String;
  location: String;
  level: String;
  proposal: String;
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
    proposal,
  } = props;

  return (
    <div className="flex bg-slate-100 rounded-2xl w-[35%]">
      <div className="flex flex-col h-[432px] rounded-xl p-8 bg-slate-50">
        <div className="flex flex-col gap-3 h-[40px] mb-6">
          <div className="flex justify-between ">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <h5 className="text-2xl font-light">{price}</h5>
          </div>
          <div className="flex gap-10 justify-stretch w-full h-[41px] mb-6">
            {category?.map((element, index) => {
              return (
                <div
                  key={index}
                  className="flex w-fill h-[41px] py-2 px-4 border-inherit bg-slate-100 border-solid rounded-xl text-base font-bold text-[#0d47a1]"
                >
                  {element}
                </div>
              );
            })}
          </div>
          <div className="flex w-full rounded-xl pb-6">
            <h6 className="text-base">{description}</h6>
          </div>
          <div className="flex flex-wrap gap-[10px] justify-between items-center w-full h-[49px] pb-6">
            <div className="flex  h-full gap-[5px] text-base ">
              <h5>Expire:</h5>
              <h4 className="text-base font-bold"> {expire}</h4>
            </div>
            <div className="flex  h-full gap-[5px] text-base ">
              <h5>Location:</h5>
              <h4 className="text-base font-bold"> {location}</h4>
            </div>
            <div className="flex  h-full gap-[5px] text-base ">
              <h5>Level:</h5>
              <h4 className="text-base font-bold"> {level}</h4>
            </div>
            <div className="flex  h-full gap-[5px] text-base ">
              <h5>Proporsal:</h5>
              <h4 className="text-base font-bold"> {proposal}</h4>
            </div>
          </div>
          <div className="flex w-full h-full justify-between items-center border-t border-dashed border-black">
            <div>
              <span>Anzog LLC verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
