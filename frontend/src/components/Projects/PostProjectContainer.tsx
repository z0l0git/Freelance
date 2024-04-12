"use client";
import React, { useEffect, useState } from "react";
import { Filter } from "../Filter/Filter";
import { Projects } from "./Projects";

type SkillType = {
  name: string;
  id: string;
};

type DataType = {
  name: string;
  description: string;
  _id: string;
};
type PosdtDataType = {
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
  AllProject: PosdtDataType[];
  skills: SkillType[];
  data: DataType[];
};

export const PostProjectContainer = (props: PropsType) => {
  const { AllProject, skills, data } = props;
  const [filtered, setFiltered] = useState<PosdtDataType[]>([]);
  console.log(filtered, " filters");

  useEffect(() => {
    setFiltered(AllProject);
  }, [] || [AllProject]);

  return (
    <div className="flex justify-center bg-slate-200 h-fit gap-5">
      <div className="sticky top-0 h-[100%] my-[100px] ">
        <Filter skills={skills} data={data} setFiltered={setFiltered} />
      </div>
      <div className="my-[100px] pb-[100px]">
        <Projects setFiltered={setFiltered} filtered={filtered} />
      </div>
    </div>
  );
};
