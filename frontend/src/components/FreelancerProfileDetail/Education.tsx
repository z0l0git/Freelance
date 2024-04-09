"use client";
import React, { useState } from "react";
import { WhiteButton } from "../Button";

export const Education = () => {
  const [addEducation, setAddEducation] = useState(false);
  const clickButton = () => {
    setAddEducation(!addEducation);
  };
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold">Education</h3>
        {!addEducation ? (
          <WhiteButton
            buttonClass="font-bold text-[#0d47a1] "
            onClick={clickButton}
            buttonName="Add New"
          />
        ) : (
          ""
        )}
      </div>
      <div>
        <input
          type="text"
          value="End Education ee oruulaarai"
          className="w-full h-fit text-[#979CA8]"
        />
      </div>
    </div>
  );
};
export const Certification = () => {
  const [addCertification, setAddCertification] = useState(false);
  const clickButton = () => {
    setAddCertification(!addCertification);
  };
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold">Certification</h3>
        {!addCertification ? (
          <WhiteButton
            buttonClass="font-bold text-[#0d47a1] "
            onClick={clickButton}
            buttonName="Add New"
          />
        ) : (
          ""
        )}
      </div>
      <div>
        <input
          type="text"
          value="End Certification ee oruulaarai"
          className="w-full h-fit text-[#979CA8]"
        />
      </div>
    </div>
  );
};