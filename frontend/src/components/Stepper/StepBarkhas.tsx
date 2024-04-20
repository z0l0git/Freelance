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
import axios from "axios";

type PosdtDataType = {
  createdBy: string;
  title: string;
  description: string;
  budget: string;
  deliveryTime: string;
  flexible: boolean;
  categorys: string[];
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

  const { data } = useContext(DataContext);

  const [step, setStep] = useState(0);
  const [error, setError] = useState<string>("");
  const [test, setTest] = useState<string>();

  const [postData, setPostData] = useState<PosdtDataType>({
    createdBy: "",
    title: "",
    description: "",
    budget: "",
    deliveryTime: "",
    flexible: false,
    categorys: [],
    skillss: [],
  });
  console.log(postData, "postData");

  const { push } = useRouter();

  const CurrentStep = steps[step];

  const handleNext = async () => {
    if (step === 0) {
      if (postData.title === "" || postData.description === "") {
        setError("Title and description are required");
      } else {
        setError("");
        setStep(step + 1);
      }
    }

    if (step === 1) {
      if (postData.categorys.length === 0 || postData.skillss.length === 0) {
        setError("Category and skill are required");
      } else {
        setError("");
        setStep(step + 1);
      }
    }

    if (step === steps.length - 2) {
      if (postData.budget === "" || postData.deliveryTime === "") {
        setError("Budget and delivery time are required");
      } else {
        try {
          const { data } = await axios.post(
            "https://freelance-gmjr.onrender.com/postProject",
            postData
          );
          setError("");
          setStep(step + 1);
          console.log(data, "new post");
          console.log("amjilttai uuslee");
        } catch (err: any) {
          console.log(err.message, "err");
        }
      }
    }

    if (step === steps.length - 1) {
      window.location.href = "/projects";
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleChange = (el: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = el.target;
    setPostData({ ...postData, [name]: value });
  };

  useEffect(() => {
    setPostData({ ...postData, createdBy: data?._id });
  }, [data]);

  return (
    <div>
      <div className="flex flex-col items-center bg-white gap-10">
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
        <div className="flex gap-2  m-[40px] w-[1280px] bg-white">
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
              {error && <div className="text-red-500">{error}</div>}
            </div>
          )}
        </div>
      </div>

      {/* <div className="flex flex-col md:flex-row w-full my-5 items-start justify-start"></div> */}
    </div>
  );
};
