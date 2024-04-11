import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";
import { Dispatch, SetStateAction } from "react";
import { ChangeEvent } from "react";

type CheckType = {
  name: string;
  text: string;
  // key: number;

  // checked: any;
};

const CheckCategory = (props: CheckType) => {
  const { name, text } = props;
  return (
    <RadioGroup
      className="flex flex-col gap-12 m-4 "
      defaultValue="comfortable"
    >
      <label className="flex flex-col gap-5 " htmlFor={name}>
        <div className="flex items-center justify-start space-x-2 gap-4">
          <Checkbox id={name} />
          <div className="flex flex-col gap-4 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            <p className="font-bold  text-[#404a60]">{name}</p>
            <p>{text}</p>
          </div>
        </div>
        <div className="border-b border-dashed w-full"></div>
      </label>
    </RadioGroup>
  );
};

export default CheckCategory;
