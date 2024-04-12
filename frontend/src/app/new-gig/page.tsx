import { Footer } from "@/components/Footer/Footer";
import { HeaderSearch } from "@/components/HeaderSearch/HeaderSearch";
import { Menu } from "@/components/Menu/Menu";
import { StepperBarkhas } from "@/components/Stepper/StepBarkhas";
import { AxiosInstance } from "@/utils/axiosInstance";
import axios from "axios";
import { log } from "console";

import React from "react";

export const GetProjectCategory = async () => {
  try {
    const { data } = await axios.get(
      "https://freelance-gmjr.onrender.com/getProjectCategory"
    );

    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};
export const GetSkillCategory = async () => {
  try {
    const { data: skill } = await axios.get(
      "https://freelance-gmjr.onrender.com/categories"
    );
    return skill;
  } catch (err: any) {
    console.log(err.message);
  }
};

const page = async () => {
  const data = await GetProjectCategory();
  const skill = await GetSkillCategory();

  return (
    <div>
      <div className="bg-[url(https://pixner.net/aihire/aihire/assets/img/bn/breadcumndbg.jpg)]">
        <HeaderSearch />
        <Menu />
      </div>
      <StepperBarkhas dataProjectCategory={data} skillCategory={skill?.data} />
      <Footer />
    </div>
  );
};

export default page;
