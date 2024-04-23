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
        <h3 className="skillTitle">Education</h3>
        {!addEducation ? (
          <WhiteButton
            buttonClass="skillEditButton"
            onClick={clickButton}
            buttonName="Add New "
          />
        ) : (
          <IoCloseCircleSharp onClick={clickButton} className="skillCancel" />
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
        <h3 className="skillTitle">Work Experience</h3>
        {!addCertification ? (
          <WhiteButton
            buttonClass="skillEditButton"
            onClick={clickButton}
            buttonName="Add New"
          />
        ) : (
          <IoCloseCircleSharp onClick={clickButton} className="skillCancel" />
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
