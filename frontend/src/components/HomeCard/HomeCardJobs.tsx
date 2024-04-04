"use client";

import React from "react";

export const HomeCardJobs = () => {
  return (
    <div className="flex w-screen items-center justify-center py-8">
      <div className="flex flex-col w-[636px] h-[268px] bg-slate-300 rounded-2xl p-8">
        <div className="flex gap-6">
          <div className="flex items-center justify-center w-[200px] h-[200px rounded-full border-2 border-solid border-slate-500]"></div>

          <div className="flex flex-col w-[333px] h-[203px] bg-slate-200">
            <div className="flex w-full h-[38.4px] mb-6 items-center px-3 text-3xl font-semibold">
              <h1>I need a task done</h1>
            </div>
            <div className="flex w-full h-[48px] mb-[40px] text-base font-normal">
              <h6>
                Have a specific AI task that needs to be completed? Look no
                further!
              </h6>
            </div>
            <button className="flex items-center justify-center px-[25px] py-[12px] w-[178] h-[48px] border-solid border-[#0D47A1] border-2 bg-slate-50 rounded-3xl mt-8 text-base font-semibold text-[#0D47A1] ">
              View Servises
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
