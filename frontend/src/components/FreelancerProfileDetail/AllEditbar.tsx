"user client";
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { FiEdit } from "react-icons/fi";
import { BlueButton, ButtonWithBlueBorder, WhiteButton } from "../Button";
import { DescriptionEditComp } from "./DescriptionEditComp";

export const EditBar = () => {
  const [descriptionEdit, setDescriptionEdit] = useState("");

  const editHandler = () => {};
  return (
    <div className="w-[416px] h-[1076] rounded-2xl border p-8 gap-4 ">
      <div className="w-full flex flex-col pb-4">
        <DescriptionEditComp />
      </div>
      <div className="w-full border-dashed border-t-2"></div>
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold">Languages</h3>
          {/* <WhiteButton
            buttonClass="font-bold text-[#0d47a1] cursor-pointer"
            onClick={setShowDescriptionEdit}
            buttonName="Add New"
            visible={showdescriptionEdit}
          /> */}
        </div>
        <div></div>
        {/* <FormComponent /> */}
      </div>
    </div>
  );
};
