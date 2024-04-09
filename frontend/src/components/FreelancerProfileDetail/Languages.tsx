"use client";
import React, { useState } from "react";
import { WhiteButton } from "../Button";
import { LanguagesDetail } from "./LanguageDetail";
export const Languages = () => {
  const [add, setAdd] = useState(false);
  return (
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold">Languages</h3>
        <WhiteButton
          buttonClass="font-bold text-[#0d47a1] cursor-pointer"
          onClick={add}
          buttonName="Add New"
          visible={add}
        />
      </div>
      <div>
        <LanguagesDetail />
      </div>
    </div>
  );
};
