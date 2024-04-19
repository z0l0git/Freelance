"use client ";
import React, { useState } from "react";
import { WhiteButton } from "../Button";
import { FormComp } from "./FormComp";
import { IoCloseCircleSharp } from "react-icons/io5";
import { MouseEvent } from "react";
type SkillType = {
  name: string;
  id: string;
};
type SkillT = {
  id: string;
};

type PropsType = {
  skill: SkillType[];
};

export const Skills = (props: PropsType) => {
  const { skill } = props;

  console.log(skill, "skil3333");
  const [addSkills, setAddSkills] = useState(false);
  const [skillData, setSkillData] = useState<SkillT[]>();
  console.log(skillData, "skill data");

  const clickButton = () => {
    setAddSkills(!addSkills);
  };

  const handleSkillData = (event: MouseEvent<HTMLDivElement>) => {
    const SkillId = event.currentTarget.id;
    console.log(SkillId, "skill id");

    setSkillData((prev) => ...prev, SkillId);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold xl:text-xl">Skills</h3>
        {!addSkills ? (
          <WhiteButton
            buttonClass="font-bold text-[#0d47a1] cursor-pointer xl:text-md"
            onClick={clickButton}
            buttonName="Add New"
          />
        ) : (
          <IoCloseCircleSharp onClick={clickButton} className="w-6 h-6" />
        )}
      </div>
      {!addSkills ? (
        <div className="flex flex-wrap gap-2">
          {skill?.map((el, index) => {
            return (
              <div key={index} onClick={handleSkillData} id={el.id}>
                <WhiteButton
                  buttonName={el.name}
                  buttonClass="px-4 py-3 overflow-hidden rounded-[100px] border-[#DFE0E4] border text-sm  text-[#404A60] flex items-center gap-1 hover:text-[#2196F3]"
                />
              </div>
            );
          })}
        </div>
      ) : (
        <FormComp clickButton={clickButton} />
      )}
    </div>
  );
};
