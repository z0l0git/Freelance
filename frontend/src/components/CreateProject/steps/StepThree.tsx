import { NameInputComponent } from "@/components/Input";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

const StepThree = () => {
  return (
    <div className="flex gap-5 h-fit">
      <div className="flex flex-col border rounded-xl p-4 gap-4 w-[750px]">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold  text-[#212e48] text-[22px]">
            Add Timeline and Budget
          </h1>
          <div className="border-b border-dashed w-full"></div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-bold text-[18px] text-[#212e48]">
            Give your project brief a title
          </p>
        </div>
        <NameInputComponent
          className=" text-black "
          placeholder="Inter Title"
        />
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
        <div className="flex items-center">
          <div className="border-b border-dashed w-full"></div>
          <div className="flex items-center justify-center w-[400px]">
            <p className="text-[10px]">ABOUT THE PROJECT</p>
          </div>
          <div className="border-b border-dashed w-full"></div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-bold text-[18px] text-[#212e48]">
            Give your project brief a title
          </p>
        </div>
        <div>
          <NameInputComponent />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms1" />
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
      </div>
      <div className="border rounded-xl w-[434px] h-[450px]">
        <div className="flex flex-col m-4 gap-5">
          <h1 className="font-bold  text-[#212e48] text-[22px]">
            Now let's talk budget and timing
          </h1>
          <p>
            You're not committing to anything final here.This just helps us find
            you the most relevant
          </p>
          <Image src="/matching.png" width={400} height={400} alt="matching" />
        </div>
      </div>
    </div>
  );
};

export default StepThree;
