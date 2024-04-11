"use client";

import React from "react";
// import { ButtonWithBlueBorder } from "../Button";
import { Input } from "../../components/ui/input";
import { CheckCircle } from "../../components/ui/checkcircle";
import { MouseEvent } from "react";

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

type SS = {
  Skill: SkillType[];
  setPost: React.Dispatch<React.SetStateAction<PosdtDataType[] | undefined>>;
};

const typeCategory = [
  { category: "NPL specialists", count: 45 },
  { category: "Social developers", count: 30 },
  { category: "Badjet specialists", count: 23 },
  { category: "Accounters", count: 15 },
  { category: "Translators", count: 22 },
  { category: "Web developers", count: 22 },
  { category: "Tender specialists", count: 22 },
  { category: "Project managers", count: 22 },
  { category: "English teacher", count: 22 },
];

const skillsCategory = [
  { category: "Open AI" },
  { category: ".NET 5.0/6" },
  { category: ".NET" },
  { category: "PHP" },
  { category: "HTML" },
  { category: "Java" },
  { category: "Python" },
];

export const Filter = (props: SS) => {
  const { Skill, setPost } = props;

  const handleFilterBySkills = (event: MouseEvent<HTMLDivElement>) => {
    const skillId = event.currentTarget.id;
    console.log(skillId, "skkillis");

    // setPost((prev) => ({
    //   ...prev,
    //   skills: prev.skills.filter((el) => el.id === skillId),
    // }));
  };

  return (
    <div className="flex bg-slate-100 rounded-2xl">
      <div className="flex flex-col w-[352px] xl:w-[416px] h-fill rounded-xl p-8 bg-slate-50">
        <div className="w-[352px] h-[56px] pb-6 mb-6">
          <h3 className="text-2xl font-semibold">Filter</h3>
        </div>

        <Input
          className="w-full h-[56px] pb-6 mb-6 rounded-3xl bg-slate-200 p-3"
          type={"text"}
          id={"search"}
          placeholder={"search"}
        />

        <div className="w-[352px] h-[56px] pt-6 mb-1">
          <h2 className="text-2xl font-semibold">Types of Categories</h2>
        </div>
        <div className="flex flex-col gap-2">
          {typeCategory.map((el, i) => {
            return (
              <div
                key={i}
                className="flex items-center justify-between w-352px h-[32px"
              >
                <div className="flex gap-2 items-center">
                  <CheckCircle className="" />
                  <h3 className="text-base font-medium">{el.category}</h3>
                </div>
                <span>{el.count}</span>
              </div>
            );
          })}
        </div>
        <div className="w-[352px] h-[56px] pt-6 mb-1 mt-[40px]">
          <h2 className="text-2xl font-semibold">Budget</h2>
        </div>
        <div className="flex gap-8">
          <div className="flex items-center justify-center p-4 w-36 h-12 border-solid border-slate-500 bg-slate-200 rounded-3xl">
            Min
          </div>
          <span className="flex items-center justify-center">to</span>
          <div className="flex items-center justify-center p-4 w-36 h-12 border-solid border-slate-500 bg-slate-200 rounded-3xl">
            Max
          </div>
        </div>

        <div className="w-[352px] h-[56px] pt-6 mb-1 mt-[40px]">
          <h2 className="text-2xl font-semibold">Skills</h2>
        </div>
        <div className="flex flex-col gap-2">
          {Skill.map((el, i) => {
            return (
              <div
                key={i}
                className="flex items-center justify-between w-352px h-[32px"
                onClick={handleFilterBySkills}
                id={el.id}
              >
                <div className="flex gap-2 items-center">
                  <CheckCircle className="" />
                  <h3 className="text-base font-medium">{el.name}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <button className="flex items-center justify-center p-4 w-full h-12 border-solid border-[#0D47A1] border-2 bg-slate-50 rounded-3xl mt-8 text-base font-semibold text-[#0D47A1] ">
            Reset Filter
          </button>
        </div>
      </div>
    </div>
  );
};
