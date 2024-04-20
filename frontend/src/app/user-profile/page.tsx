import React from "react";
import { Footer } from "@/components/Footer/Footer";
import { Menu } from "@/components/Menu/Menu";
import { UsePage } from "./UsePage";
import { PageHeroes } from "@/components/Profilepath";
import { GetSkillCategory } from "@/utils/axiosInstance";

const page = async () => {
  const skill = await GetSkillCategory();

  return (
    <div className="flex flex-col bg-gray-50 w-screen items-center">
      <div className="w-full sticky top-0">
        <Menu />
      </div>
      <div>
        <PageHeroes
          PageBigName="Profile"
          Home="Home"
          PageLink="/user-profile"
          PageLinkName="User profile"
          ButtonClass="blueBorderButton responsivePatchCompButton"
          LandingPage="User profile"
          ButtonName="Log Out"
          PictureOfPage={""}
          pictureofalt={""}
          ImageClass="responsivePatchCompImage"
        />
      </div>
      <UsePage skill={skill} />
      <Footer />
    </div>
  );
};

export default page;
