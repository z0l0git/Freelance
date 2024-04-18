import { Footer } from "@/components/Footer/Footer";
import { HeaderSearch } from "@/components/HeaderSearch/HeaderSearch";
import { Menu } from "@/components/Menu/Menu";
import { PageHeroes } from "@/components/Profilepath";
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
    <div className="bg-slate-200">
      <div className="bg-[url(https://pixner.net/aihire/aihire/assets/img/bn/breadcumndbg.jpg)]">
        <Menu />
      </div>
      <div className="mb-[200px] bg-slate-200">
        <PageHeroes
          PageBigName="Post a Request"
          Home="Home"
          PageLink="/user-profile"
          PageLinkName="User Profile"
          ButtonClass="blueBorderButton font-semibold"
          LandingPage="Post a Request"
          ButtonName="Log Out"
          PictureOfPage={""}
          pictureofalt={""}
          ImageClass={"hidden"}
        />
      </div>
      <StepperBarkhas dataProjectCategory={data} skillCategory={skill} />
      <Footer />
    </div>
  );
};

export default page;
