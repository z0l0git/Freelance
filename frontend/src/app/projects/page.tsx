import { Menu } from "@/components/Menu/Menu";
import React from "react";
import { Footer } from "@/components/Footer/Footer";
import axios from "axios";
import { GetProjectCategory, GetSkillCategory } from "@/utils/axiosInstance";
import ProjectPageMidd from "@/components/Projects/ProjectPageMidd";
import { PageHeroes } from "@/components/Profilepath";

type SkillType = {
  name: string;
  id: string;
};

type DataType = {
  name: string;
  description: string;
  _id: string;
};

const GetAllPosts = async () => {
  try {

    const { data } = await axios.post("https://freelance-gmjr.onrender.com/getAllProject");

    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

const page = async () => {
  const AllPost = await GetAllPosts();

  const data: DataType[] = await GetProjectCategory();
  const skills: SkillType[] = await GetSkillCategory();

  return (
    <div>
      <div className="bg-[url(https://pixner.net/aihire/aihire/assets/img/bn/breadcumndbg.jpg)]">
        <Menu />
      </div>
      <div>
        <PageHeroes
          PageBigName="Projects"
          Home="Home"
          PageLink="/projects"
          PageLinkName="Projects"
          ButtonClass="hidden"
          LandingPage="projects"
          ButtonName="Log Out"
          PictureOfPage=""
          pictureofalt=""
          ImageClass="responsivePatchCompImage"
        />
      </div>
      <ProjectPageMidd data={data} AllPost={AllPost} skills={skills} />
      <Footer />
    </div>
  );
};

export default page;
