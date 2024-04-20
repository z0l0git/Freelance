"use client";
import React, { useState } from "react";
import { WhiteButton } from "../Button";
import { EducationAddComp } from "./EducationAddComp";
import { WorkExperienceComp } from "./WorkExperience";
import { IoCloseCircleSharp } from "react-icons/io5";


export const Education = () => {
  const [addEducation, setAddEducation] = useState(false);
  const clickButton = () => {
    setAddEducation(!addEducation);
  };

  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold xl:text-xl">Education</h3>
        {!addEducation ? (
          <WhiteButton
            buttonClass="font-bold text-[#0d47a1] cursor-pointer "
            onClick={clickButton}
            buttonName="Add New "
          />
        ) : (
          <IoCloseCircleSharp
            onClick={clickButton}
            className="w-6 h-6 cursor-pointer"
          />
        )}
      </div>
      <div>
        {!addEducation ? (
          <div></div>
        ) : (
          <EducationAddComp clickButton={clickButton} />
        )}
      </div>
    </div>
  );
};

export const WorkExperience = () => {
  const [addCertification, setAddCertification] = useState(false);
  const clickButton = () => {
    setAddCertification(!addCertification);
  };
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold xl:text-xl">Work Experience</h3>
        {!addCertification ? (
          <WhiteButton
            buttonClass="font-bold text-[#0d47a1] cursor-pointer "
            onClick={clickButton}
            buttonName="Add New"
          />
        ) : (
          <IoCloseCircleSharp
            onClick={clickButton}
            className="w-6 h-6 cursor-pointer"
          />
        )}
      </div>
      <div>
        {!addCertification ? (
          <div></div>
        ) : (
          <WorkExperienceComp clickButton={clickButton} />
        )}
      </div>
    </div>
  );
};
