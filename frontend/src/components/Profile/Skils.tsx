"use client";
import { SkillsMap } from "./ProfileMaps";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useState } from "react";
const Skill = [
  {
    MySkills: "UI/UX Design",
  },
  {
    MySkills: "Front End",
  },
  {
    MySkills: "Back End",
  },
  {
    MySkills: "Data Analytics",
  },
  {
    MySkills: "Machine Learning",
  },
];
type SkillType = {
  name: string;
  id: any;
};
type Response = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  discription: string;
  location: string;
  createdAt: string;
  image: string;
  jobTitle: string;
  budget: number;
  skills: SkillType[];
};

type SkillPropType = {
  skill: SkillType[];
  data?: Response;
};
export const Skills = (props: SkillPropType) => {
  const { skill, data } = props;

  console.log(data?.skills, "dsaaaaaaaa");
  console.log(skill, "skillsss");

  const ass: SkillType[] = [];

  data?.skills.forEach((el) => {
    const matchedSkill = skill?.find((el2) => el2.id === el);
    if (matchedSkill) {
      ass.push(matchedSkill);
    } else {
      ("");
    }
  });
  console.log(ass, "asss");

  return (
    <div className=" w-[406px] md:w-[816px] h-fit mt-3 mb-6">
      <strong className="text-[24px] ">My Skills :</strong>
      <div className="w-full mt-4 flex flex-wrap gap-[10px] h-fit">
        {data?.skills.map((el, index) => {
          return <SkillsMap key={index} MySkills={el.name} />;
        })}
      </div>
    </div>
  );
};
