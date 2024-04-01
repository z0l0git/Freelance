"use client";

import React from "react";

export const ProjectCard = () => {
  return (
    <div className="flex w-screen justify-center bg-slate-200 items-center">
      <div className="flex flex-col w-[856px] h-[432px] rounded-xl p-8">
        <div className="flex flex-col w-[792px] h-[40px] justify-between gap-10 mb-6">
          <div className="flex ">
            <h3 className="text-2xl font-semibold">
              Python Developer for a Slack App/Plugin
            </h3>
            <h5 className="text-2xl font-light">$163 - $1489</h5>
          </div>
          <div className="flex gap-10 justify-stretch w-full h-[41px] mb-6">
            <div className="flex w-fill h-[41px] py-2 px-4 border-inherit bg-slate-100 border-solid rounded-xl text-base font-bold text-[#0d47a1]">
              Python
            </div>
            <div className="flex w-fill h-[41px] py-2 px-4 border-inherit bg-slate-100 border-solid rounded-xl text-base font-bold text-[#0d47a1]">
              Software Architecture
            </div>
            <div className="flex w-fill h-[41px] py-2 px-4 border-inherit bg-slate-100 border-solid rounded-xl text-base font-bold text-[#0d47a1]">
              API Integration{" "}
            </div>
            <div className="flex w-fill h-[41px] py-2 px-4 border-inherit bg-slate-100 border-solid rounded-xl text-base font-bold text-[#0d47a1]">
              Open AI
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
