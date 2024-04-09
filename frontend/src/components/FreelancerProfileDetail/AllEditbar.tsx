"user client";
import React, { useState } from "react";
import { DescriptionEditComp } from "./DescriptionEditComp";
import { Languages } from "./Languages";
import { Skills } from "./Skills";
import { Certification, Education } from "./Education";

export const EditBar = () => {
  return (
    <div className="w-[416px] h-[1076px] rounded-2xl border p-8 gap-4 ">
      <div className="w-full flex flex-col pb-4 ">
        <DescriptionEditComp />
      </div>
      <div className="w-full border-dashed border-t-2 "></div>
      <div className="w-full my-8 ">
        <Languages />
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
        <Certification />
      </div>
    </div>
  );
};
