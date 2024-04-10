"use client";

import Stepper from "@/components/CreateProject/Stepper";
import StepOne from "@/components/CreateProject/steps/StepOne";
import StepTwo from "@/components/CreateProject/steps/StepTwo";
import StepThree from "@/components/CreateProject/steps/StepThree";
import { BlueButton, ButtonWithBlueBorder } from "@/components/Button";
import { useRouter } from "next/navigation";
import React, { useState, ChangeEvent, useEffect } from "react";
import StepFour from "@/components/CreateProject/steps/StepFour";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

type PosdtDataType = {
  createdBy: string;
  title: string;
  description: string;
  budget: number;
  deliveryTime: string;
  flexible: boolean;
  categorys: DataType[];
  skillss: string[];
};

type DataType = {
  name: string;
  description: string;
  _id: string;
};
type SkillType = {
  name: string;
  id: string;
};
type CateType = {
  dataProjectCategory: DataType[];
  skillCategory: SkillType[];
};

const steps = [StepOne, StepTwo, StepThree, StepFour];

export const StepperBarkhas = (props: CateType) => {
  const { dataProjectCategory, skillCategory } = props;
  // console.log(dataProjectCategory, "dataProjectCategory");

  const { userdata } = useContext(DataContext);

  const [step, setStep] = useState(0);

  const [postData, setPostData] = useState<PosdtDataType>({
    createdBy: "",
    title: "",
    description: "",
    budget: 0,
    deliveryTime: "",
    flexible: false,
    categorys: [],
    skillss: [],
  });
  console.log(postData, "postData");

  const { push } = useRouter();

  const CurrentStep = steps[step];

  const handleNext = () => {
    if (step === steps.length - 1) return push("/");
    setStep(step + 1);
  };
  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleChange = (el: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = el.target;
    setPostData({ ...postData, [name]: value });
  };

  useEffect(() => {
    setPostData({ ...postData, createdBy: userdata._id });
  }, [userdata]);

  return (
    <div>
      <div className="flex flex-col items-center ">
        <Stepper step={step} />
        {step < steps.length && (
          <CurrentStep
            handlePrevious={handlePrevious}
            handleSubmit={handleNext}
            dataProjectCategory={dataProjectCategory}
            skillCategory={skillCategory}
            handleChange={handleChange}
            setPostData={setPostData}
            postData={postData}
          />
        )}
      </div>
      <div className="flex gap-2 mx-[120px] my-5">
        {step < 3 && (
          <BlueButton
            height="70px"
            width="30%"
            buttonName="Save & Continue"
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
  );
};
