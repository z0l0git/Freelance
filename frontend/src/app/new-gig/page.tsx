import { Footer } from "@/components/Footer/Footer";
import { HeaderSearch } from "@/components/HeaderSearch/HeaderSearch";
import { Menu } from "@/components/Menu/Menu";
import { StepperBarkhas } from "@/components/Stepper/StepBarkhas";
import {
  AxiosInstance,
  GetProjectCategory,
  GetSkillCategory,
} from "@/utils/axiosInstance";
import axios from "axios";
import { log } from "console";

import React from "react";

const page = async () => {
  const data = await GetProjectCategory();
  const skill = await GetSkillCategory();

  return (
    <div>
      <div className="bg-[url(https://pixner.net/aihire/aihire/assets/img/bn/breadcumndbg.jpg)]">
        <Menu />
      </div>
      <StepperBarkhas dataProjectCategory={data} skillCategory={skill} />
      <Footer />
    </div>
  );
};

export default page;
