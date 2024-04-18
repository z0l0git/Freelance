"user client";
import React, { useState } from "react";
import { DescriptionEditComp } from "./DescriptionEditComp";
import { Languages } from "./Languages";
import { Skills } from "./Skills";
import { WorkExperience, Education } from "./Education";
import { SocialAccounts } from "./SocialAccounts";

export const EditBar = () => {
  return (
    <div className="w-[416px] h-fit rounded-2xl border p-8 gap-4 bg-white max-sm:w-full max-sm:px-2 sm:w-full sm:px-2 xl:py-8 xl:px-4">
      <div className="w-full flex flex-col pb-4 ">
        <DescriptionEditComp />
      </div>
      <div className="w-full border-dashed border-t-2 "></div>
      <div className="w-full my-8 ">
        <Languages />
      </div>
      <div className="w-full border-dashed border-t-2 "></div>
      <div className="w-full my-8 ">
        <SocialAccounts />
      </div>
      <div className="w-full border-dashed border-t-2 "></div>
      <div className="w-full my-8">
        <Skills />
      </div>
      <div className="w-full border-dashed border-t-2 "></div>
      <div className="w-full my-8">
        <Education />
      </div>
      <div className="w-full border-dashed border-t-2 "></div>
      <div className="w-full my-8">
        <WorkExperience />
      </div>
    </div>
  );
};
