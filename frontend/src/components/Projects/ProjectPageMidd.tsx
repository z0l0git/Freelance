"use client";
import React from "react";

import { Filter } from "../Filter/Filter";

import { Projects } from "./Projects";
import { useState } from "react";
import ProjectsGet from "./ProjectsGet";

type DataType = {
  name: string;
  description: string;
  _id: string;
};
type SkillType = {
  name: string;
  id: string;
};

type PosdtDataType = {
  _id: string;
  createdBy: {
    firstName: string;
    lastName: string;
  };
  title: string;
  description: string;
  budget: number;
  deliveryTime: string;
  flexible: boolean;
  categorys: string[];
  skills: SkillType[];
};

type PropsType = {
  data: DataType[];
  skills: SkillType[];
  AllPost: PosdtDataType[];
};
export default function ProjectPageMidd(props: PropsType) {
  const { data, skills, AllPost } = props;

  const [skill, setSkill] = useState("");
  console.log(skill, "skilll");

  const [category, setCategory] = useState("");
  return (
    <div>
      <div className="flex justify-center bg-slate-200 h-fit gap-5">
        <div className="sticky top-0 h-[100%] my-[100px] ">
          <Filter
            setSkill={setSkill}
            setCategory={setCategory}
            data={data}
            skills={skills}
          />
        </div>
        <div className="my-[100px] pb-[100px]">
          <Projects AllPost={AllPost} />
        </div>
      </div>
    </div>
  );
}
