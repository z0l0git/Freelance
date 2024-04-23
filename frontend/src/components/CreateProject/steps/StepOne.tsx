import React from "react";
import Image from "next/image";
import { ChangeEvent } from "react";
import { NameInputComponent } from "@/components/Input";

type StepOneProps = {
  handleChange: (el: ChangeEvent<HTMLInputElement>) => void;
};
const StepOne = (props: StepOneProps) => {
  const { handleChange } = props;

  return (
    <div className="md:flex-row max-w-[1200px] bg-white p-8 rounded-xl flex flex-col  justify-center gap-5 h-fit ">
      <div className="flex flex-col border rounded-xl p-4 gap-4 w-fit md:w-[750px]">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold  text-[#212e48] text-[22px]">
            About the project
          </h1>
          <div className="border-b border-dashed w-full"></div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-[18px] text-[#212e48]">
            Give your project brief a title
          </p>
          <p>
            Keep it short and simple - this will help us match you to the right
            category.
          </p>
          <NameInputComponent
            className="text-black flex flex-col-reverse"
            placeholder="Inter Title"
            handleChange={handleChange}
            name1="title"
          />
        </div>

        <div className="flex flex-col gap-6">
          <p className="font-bold text-[18px] text-[#212e48]">
            Detailed information about your project
          </p>
        </div>
        <p>Give in depth information about what you need.</p>
        <div className="border rounded-[25px] h-fit w-full">
          <input
            name="description"
            style={{ outline: "none" }}
            className="h-fit w-full p-3 rounded-[25px] overflow-scroll"
            type="text"
            placeholder="Write your text here..."
            onChange={(el: ChangeEvent<HTMLInputElement>) => handleChange(el)}
          />
        </div>
        {/* <div>
          <div className="flex flex-col gap-6">
            <p className="font-bold text-[18px] text-[#212e48]">
              Attach Files (up to 1)
            </p>
          </div>
          <label
            className="flex flex-col w-[300px] h-[200px] rounded-3xl bg-[#f8f9fc] items-center justify-center cursor-pointer"
            htmlFor="file-upload"
          >
            <AiOutlinePicture className="w-[60px] h-[70px]" />
            <p>Click box to upload </p>
            <p className="custom-file-upload">Browse</p>
            <input id="file-upload" type="file" />
          </label>
        </div> */}
        {/* 
        <div className="flex items-center ">
          <div className="border-b border-dashed w-full"></div>
          <div className="flex items-center justify-center w-[400px]">
            <p className="text-[10px]">ABOUT THE PROJECT</p>
          </div>
          <div className="border-b border-dashed w-full"></div>
        </div> */}
      </div>
      <div className="border rounded-xl w-[fit] md:w-[434px] h-[380px]">
        <div className="flex flex-col m-4  gap-5">
          <h1 className="font-bold  text-[#212e48] text-[22px]">
            Let the matching begin...
          </h1>
          <p>This is where you fill us in on the big picture.</p>
          <Image src="/matching.png" width={400} height={400} alt="matching" />
        </div>
      </div>
    </div>
  );
};

export default StepOne;
