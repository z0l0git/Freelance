"user client";
import React, { useState } from "react";
import { DescriptionEditComp } from "./DescriptionEditComp";
import { Budgets } from "./Languages";
import { Skills } from "./Skills";
import { Education } from "./Education";
import { WorkExperience } from "./WorkExperienceSda";
import { SocialAccounts } from "./SocialAccounts";

type SkillType = {
  name: string;
  id: string;
};

type getDataType = {
  _id: string;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  auth: string;
  socials: [];
  skills: [];
  education: [];
  workExp: [];
  createdAt: string;
};

type PropsType = {
  skill: SkillType[];
  userDataGet: getDataType | undefined;
};
export const EditBar = (props: PropsType) => {
  const { skill, userDataGet } = props;

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
        <Education userDataGet={userDataGet} />
      </div>
      <div className="w-full border-dashed border-t-2 "></div>
      <div className="w-full my-8">
        <WorkExperience userDataGet={userDataGet} />
      </div>
    </div>
  );
};
