"use client";
import React, { useEffect } from "react";
import { Projects } from "./Projects";
import { Filter } from "../Filter/Filter";
import { useState } from "react";

type SkillType = {
  name: string;
  id: string;
};
type PosdtDataType = {
  createdBy: string;
  title: string;
  description: string;
  budget: string;
  deliveryTime: string;
  flexible: boolean;
  categorys: string[];
  skills: SkillType[];
};

type ProjectsProps = {
  AllPost: PosdtDataType[];
  Skill: SkillType[];
};

export const ProjectContainer = (props: ProjectsProps) => {
  const { AllPost, Skill } = props;
  const [post, setPost] = useState<PosdtDataType[]>();

  // filterluugee setpost fuctionoo oruulaad tendee filter shaana
  //

  useEffect(() => {
    setPost(AllPost);
    console.log("ef");
  }, []);

  return (
    <div className="flex justify-center bg-slate-200 h-[1080px] overflow-scroll  gap-5">
      <div className="sticky top-0 h-[100%] overflow-scroll my-[100px] ">
        <Filter Skill={Skill as SkillType[]} setPost={setPost} />
      </div>
      <div className="my-[100px] pb-[100px]">
        <Projects post={post as PosdtDataType[]} />
      </div>
    </div>
  );
};
