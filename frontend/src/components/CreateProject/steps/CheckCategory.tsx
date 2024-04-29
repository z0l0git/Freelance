import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { MouseEvent } from "react";
import { Dispatch, SetStateAction } from "react";
import { ChangeEvent } from "react";
import { DiTravis } from "react-icons/di";

type CheckType = {
  name: string;
  text: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

const CheckCategory = (props: CheckType) => {
  const { name, text, onClick } = props;
  return (
    <div
      className="flex flex-col gap-12 m-4 cursor-pointer "
      defaultValue="comfortable"
    >
      <label className="flex flex-col gap-5 cursor-pointer " htmlFor={name}>
        <div className="flex items-center justify-start space-x-2 gap-4">
          <Checkbox id={name} onClick={onClick} />
          <div className="flex flex-col gap-4 cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            <p className="font-bold  text-[#404a60]">{name}</p>
            <p>{text}</p>
          </div>
        </div>
        <div className="border-b border-dashed w-full"></div>
      </label>
    </div>
  );
};

export default CheckCategory;
