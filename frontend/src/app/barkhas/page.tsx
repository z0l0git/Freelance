"use client";
import Stepper from "@/components/CreateProject/Stepper";
import StepOne from "@/components/CreateProject/steps/StepOne";
import StepTwo from "@/components/CreateProject/steps/StepTwo";
import StepThree from "@/components/CreateProject/steps/StepThree";
import { BlueButton, ButtonWithBlueBorder } from "@/components/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import StepFour from "@/components/CreateProject/steps/StepFour";

const steps = [StepOne, StepTwo, StepThree, StepFour];

const page = () => {
  const [step, setStep] = useState(0);
  const { push } = useRouter();

  const CurrentStep = steps[step];

  const handleNext = () => {
    if (step === steps.length - 1) return push("/");
    setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step === 0) return push("/");
    setStep(step - 1);
  };

  return (
    <div className="w-[1280px] mx-auto">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-center ">
          <Stepper step={step} />
          {step < steps.length && (
            <CurrentStep
              handlePrevious={handlePrevious}
              handleSubmit={handleNext}
            />
          )}
        </div>
        <div className="flex flex-col md:flex-row w-full my-5 items-start justify-start">
          {step < 3 && (
            <div className="w-full flex gap-4 items-center mx-[40px]">
              <BlueButton
                height="60px"
                width="210px"
                buttonName="Save & Continue"
                handleSubmit={handleNext}
              />
              <ButtonWithBlueBorder
                height="60px"
                width="fit"
                handlePrevious={handlePrevious}
                buttonName="Cancel"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default page;
