"use client";
import { StepperBarkhas } from "@/components/Stepper/StepBarkhas";
import React from "react";

import axios from "axios";

const GetProjectCategory = async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:8000/getProjectCategory"
    );

    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};
const GetSkillCategory = async () => {
  try {
    const skill = await axios.get("http://localhost:8000/categories");

    return skill;
  } catch (err: any) {
    console.log(err.message);
  }
};

const page = async () => {
  const data = await GetProjectCategory();
  const skill = await GetSkillCategory();
  return (
    <StepperBarkhas dataProjectCategory={data} skillCategory={skill?.data} />
  );
};
export default page;
