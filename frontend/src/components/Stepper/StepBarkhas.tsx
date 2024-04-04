"use client";
import React from "react";
import Stepper from "@/components/CreateProject/Stepper";
import StepOne from "@/components/CreateProject/steps/StepOne";
import StepTwo from "@/components/CreateProject/steps/StepTwo";
import StepThree from "@/components/CreateProject/steps/StepThree";
import { BlueButton, ButtonWithBlueBorder } from "@/components/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import StepFour from "@/components/CreateProject/steps/StepFour";

const steps = [StepOne, StepTwo, StepThree, StepFour];

export const StepperBarkhas = () => {
  const [step, setStep] = useState(0);
  const { push } = useRouter();

  const CurrentStep = steps[step];

  const handleNext = () => {
    if (step === steps.length - 1) return push("/");
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <>
      <div className="flex flex-col items-center ">
        <Stepper step={step} />
        {step < steps.length && (
          <CurrentStep
            handlePrevious={handlePrevious}
            handleSubmit={handleNext}
          />
        )}
      </div>
      <div className="flex gap-2 mx-[120px] my-5">
        {step < 3 && (
          <>
            <BlueButton
              height="70px"
              width="250px"
              buttonName="Save & Continue"
              handleSubmit={handleNext}
            />
            <ButtonWithBlueBorder
              handlePrevious={handlePrevious}
              buttonName="Cancel"
            />
          </>
        )}
      </div>
    </>
  );
};
