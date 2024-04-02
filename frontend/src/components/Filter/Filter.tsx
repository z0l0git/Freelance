"use client";

import React from "react";
import { Label } from "../ui/label";
import { CiCircleCheck } from "react-icons/ci";

type Filter = {
  title: string;
  jobs: string;
  counter: number;
};

export const Filter = (props: Filter) => {
  const { title, jobs, counter } = props;
  return (
    <div className="flex w-screen h-screen justify-center items-start bg-slate-100">
      <div className="flex flex-col w-[416px] h-[1295px] rounded-xl p-8 bg-slate-50">
        <div className="w-[352px] h-[56px] pb-6 mb-6">
          <h3 className="text-2xl font-semibold">Filter</h3>
        </div>
        <div className="w-[352px] h-[56px] pb-6 mb-6 rounded-3xl bg-slate-200 p-3 ">
          <Label htmlFor="name">Search</Label>
        </div>
        <div className="w-[352px] h-[56px] pt-6 mb-1">
          <h2 className="text-2xl font-semibold">{title}</h2>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between w-352px h-[32px">
            <div className="flex gap-2">
              <CiCircleCheck className="flex w-6 h-6" />
              <h3 className="text-base font-medium">{jobs}</h3>
            </div>
            <span>{counter}</span>
          </div>
          <div className="flex items-center justify-between w-352px h-[32px">
            <h3 className="text-base font-medium">Featured Jobs</h3>
            <span>356</span>
          </div>
          <div className="flex items-center justify-between w-352px h-[32px">
            <h3 className="text-base font-medium">Recruiter Jobs</h3>
            <span>356</span>
          </div>
          <div className="flex items-center justify-between w-352px h-[32px">
            <h3 className="text-base font-medium">Full time</h3>
            <span>356</span>
          </div>
          <div className="flex items-center justify-between w-352px h-[32px">
            <h3 className="text-base font-medium">Half time</h3>
            <span>356</span>
          </div>
        </div>
      </div>
    </div>
  );
};
