"use client";
import { SkillsMap } from "./ProfileMaps";

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

export const Skills = () => {
  return (
    <div className=" w-[406px] md:w-[816px] h-fit mt-3 mb-6">
      <strong className="text-[24px] ">My Skills :</strong>
      <div className="w-full mt-4 flex flex-wrap gap-[10px] md:justify-between">
        {Skill.map((el, index) => {
          return <SkillsMap key={index} MySkills={el.MySkills} />;
        })}
      </div>
    </div>
  );
};
