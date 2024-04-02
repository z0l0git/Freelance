import React from "react";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";

const Stepper = ({ step }: { step: number }) => {
  const stepTexts = ["Currency", "Balance", "Finish"];
  return (
    <div className="flex flex-col items-center gap-5 p-8">
      <ul className="steps flex items-center justify-center border rounded-xl w-[1000px]">
        {stepTexts.map((item, index) => (
          <div className="flex items-center ">
            <div key={index} className="flex flex-col items-center gap-y-2">
              <li
                className={`w-10 h-10 text-black flex items-center justify-center border border-dashed border-[#0d47a1] rounded-full ${
                  step >= index ? "bg-[#0d47a1]" : "bg-white"
                } `}
              >
                {index + 1}
              </li>
              <p>{item}</p>
            </div>
            {index < stepTexts.length - 1 && (
              <span
                className={`border border-dashed bg-[#0d47a1] w-80 mb-6 rounded-lg`}
              ></span>
            )}
          </div>
        ))}
      </ul>
      <StepThree />
    </div>
  );
};

export default Stepper;
