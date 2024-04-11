import { Filter } from "@/components/Filter/Filter";
import { HeaderSearch } from "@/components/HeaderSearch/HeaderSearch";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { Menu } from "@/components/Menu/Menu";
import React from "react";
import { Projects } from "@/components/Projects/Projects";
import { Footer } from "@/components/Footer/Footer";
import axios from "axios";
import { ProjectContainer } from "@/components/Projects/projectContainer";

type SkillType = {
  name: string;
  id: string;
};
const GetAllPosts = async () => {
  try {
    const { data } = await axios.get("http://localhost:8000/getAllProject");

    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

const GetSkillCategory = async () => {
  try {
    const { data } = await axios.get("http://localhost:8000/categories");

    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

const page = async () => {
  const AllPost = await GetAllPosts();
  const Skill = await GetSkillCategory();
  console.log(AllPost, "asd");

  return (
    <div>
      <div className="bg-[url(https://pixner.net/aihire/aihire/assets/img/bn/breadcumndbg.jpg)]  ">
        <HeaderSearch />
        <Menu />
      </div>
      <ProjectContainer AllPost={AllPost} Skill={Skill} />

      <Footer />
    </div>
  );
};

export default page;
