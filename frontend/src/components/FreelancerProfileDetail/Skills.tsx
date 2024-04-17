"use client ";
import React, { useState } from "react";
import { WhiteButton } from "../Button";
import { FormComp } from "./FormComp";
import { IoCloseCircleSharp } from "react-icons/io5";

export const Skills = () => {
  const [addSkills, setAddSkills] = useState(false);
  const clickButton = () => {
    setAddSkills(!addSkills);
  };
  const SkillArray = [
    { name: "Machine Learning" },
    { name: "Virutal Assistan" },
    { name: "AI" },
    { name: "AI Chatbot" },
    { name: "NIP Specialist" },
    { name: "Data Scientist" },
    { name: "Deep Learning" },
    { name: "Robotic" },
    { name: "Data Analyst" },
    { name: "Python" },
  ];
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold">Skills</h3>
        {!addSkills ? (
          <WhiteButton
            buttonClass="font-bold text-[#0d47a1] cursor-pointer"
            onClick={clickButton}
            buttonName="Add New"
          />
        ) : (
          <IoCloseCircleSharp onClick={clickButton} className="w-6 h-6" />
        )}
      </div>
      {!addSkills ? (
        <div className="flex flex-wrap gap-2">
          {SkillArray?.map((el, index) => {
            return (
              <WhiteButton
                key={index}
                buttonName={el.name}
                buttonClass="px-4 py-3 overflow-hidden rounded-[100px] border-[#DFE0E4] border text-sm  text-[#404A60] flex items-center gap-1 hover:text-[#2196F3]"
              />
            );
          })}
        </div>
      ) : (
        <FormComp clickButton={clickButton} />
      )}
    </div>
  );
};
