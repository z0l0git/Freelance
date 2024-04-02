"user client";
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { App } from "@/components/FreelancerProfileDetail/TestComp";
import { FiEdit } from "react-icons/fi";
import { BlueButton, ButtonWithBlueBorder, WhiteButton } from "../Button";
import { DescriptionEditComp } from "./DescriptionEditComp";
export const EditBar = () => {
  const [descriptionEdit, setDescriptionEdit] = useState("");
  const [showdescriptionEdit, setShowDescriptionEdit] = useState(false);
  const editHandler = () => {};
  return (
    <div className="w-[416px] h-[1076] rounded-2xl border p-8 gap-4 ">
      <div className="w-full flex flex-col pb-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl">Description</h3>
          <WhiteButton
            className="font-bold text-[#0D47A9] cursor-pointer"
            onClick={setShowDescriptionEdit}
            buttonName="Edit"
            visible={showdescriptionEdit}
          />
        </div>
        {showdescriptionEdit ? (
          <DescriptionEditComp />
        ) : (
          <p>
            Hi, This is Darrell Steward. An Expert Machine Learner. You can call
            me a Researcher and problem solver! I am Following the 2023 Design
            Trends. My attribution of work is Minimalist/Flat/simple.
          </p>
        )}
      </div>
      <div className="w-full border-dashed border-t-2"></div>
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl">Languages</h3>
          <span>Add new</span>
        </div>
        <div></div>
        <App />
        {/* <FormComponent /> */}
      </div>
    </div>
  );
};
