import React from "react";
import Image from "next/image";
import {
  BlueButton,
  ButtonWithBlueBorder,
  WhiteButton,
} from "@/components/Button";

type StepFourProps = {
  handlePrevious: () => void;
  handleSubmit: () => void;
};

const StepFour = ({ handlePrevious, handleSubmit }: StepFourProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="flex flex-col rounded-xl p-4 gap-4 w-[750px] bg-[#f8f9fc]">
        <div className="flex items-center justify-center">
          <Image src="/art-take.png" width={200} height={200} alt="art-take" />
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="font-bold  text-[#212e48] text-[22px] ">
            Your project is posted, Good Luck!
          </h1>
          <p className="text-[#212e48]">
            You can see your projects in the "Projects" page
          </p>
        </div>
        <div className="w-full flex gap-2 my-5 items-center justify-center ">
          <BlueButton
            height="60px"
            width="190px"
            buttonName="Go to Projects"
            handleSubmit={handleSubmit}
          />

          <WhiteButton
            height="60px"
            width="190px"
            buttonClass="w-[190px] h-[60px]"
            buttonName="Go to Home"
            onClick={() => {
              window.location.href = "/";
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StepFour;
