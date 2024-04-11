"use client";
import React, { useState } from "react";
import { WhiteButton } from "../Button";
import { LanguagesDetail } from "./LanguageDetail";
import { FormComp } from "./FormComp";
import { IoCloseCircleSharp } from "react-icons/io5";

export const Languages: React.FC<{}> = (props) => {
  const [add, setAdd] = useState(false);
  const clickButton = () => {
    setAdd(!add);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold">Languages</h3>
        {!add ? (
          <WhiteButton
            buttonClass="font-bold text-[#0d47a1] cursor-pointer"
            onClick={clickButton}
            buttonName="Add New"
          />
        ) : (
          <IoCloseCircleSharp onClick={clickButton} className="w-6 h-6" />
        )}
      </div>
      <div>
        {!add ? (
          <LanguagesDetail
            value="sdf"
            add={add}
            clickButton={function (): boolean {
              throw new Error("Function not implemented.");
            }}
            setAdd={false}
          />
        ) : (
          <FormComp clickButton={clickButton} />
        )}
      </div>
    </div>
  );
};
