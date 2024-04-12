import { Filter } from "@/components/Filter/Filter";
import { HeaderSearch } from "@/components/HeaderSearch/HeaderSearch";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { Menu } from "@/components/Menu/Menu";
import React from "react";
import { Projects } from "@/components/Projects/Projects";
import { Footer } from "@/components/Footer/Footer";
import axios from "axios";
import { PostProjectContainer } from "@/components/Projects/PostProjectContainer";
import { GetProjectCategory, GetSkillCategory } from "../new-gig/page";

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
    const { data } = await axios.get(
      "https://freelance-gmjr.onrender.com/getAllProject"
    );

    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

const page = async () => {
  const AllProject = await GetAllPosts();

  const data: DataType[] = await GetProjectCategory();
  const skills: SkillType[] = await GetSkillCategory();

  return (
    <div>
      <div className="bg-[url(https://pixner.net/aihire/aihire/assets/img/bn/breadcumndbg.jpg)]">
        <Menu />
      </div>
      <div>
        <PostProjectContainer
          AllProject={AllProject}
          skills={skills}
          data={data}
        />
      </div>

      <Footer />
    </div>
  );
};

export default page;
