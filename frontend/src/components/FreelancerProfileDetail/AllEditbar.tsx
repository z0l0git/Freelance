"user client";
import React, { useState } from "react";
import { DescriptionEditComp } from "./DescriptionEditComp";
import { Budgets } from "./Languages";
import { Skills } from "./Skills";
import { WorkExperience, Education } from "./Education";
import { SocialAccounts } from "./SocialAccounts";

type SkillType = {
  name: string;
  id: string;
};

type PropsType = {
  skill: SkillType[];
};
export const EditBar = (props: PropsType) => {
  const { skill } = props;

 
  return (
    <div className="h-fit rounded-2xl border p-8 gap-4 bg-white  max-sm:px-2  sm:px-2 xl:py-8 xl:px-4">
      <div className="w-full flex flex-col pb-4 ">
        <DescriptionEditComp />
      </div>
      <div className="w-full border-dashed border-t-2 "></div>
      <div className="w-full my-8 ">
        <Budgets />
      </div>
      <div className="w-full border-dashed border-t-2 "></div>
      {/* <div className="w-full my-8 ">
        <SocialAccounts />
      </div> */}
      <div className="w-full border-dashed border-t-2 "></div>
      <div className="w-full my-8">
        <Skills skill={skill} />
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
