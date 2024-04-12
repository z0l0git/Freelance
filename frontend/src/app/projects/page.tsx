import { Filter } from "@/components/Filter/Filter";
import { HeaderSearch } from "@/components/HeaderSearch/HeaderSearch";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { Menu } from "@/components/Menu/Menu";
import React from "react";
import { Projects } from "@/components/Projects/Projects";
import { Footer } from "@/components/Footer/Footer";
import axios from "axios";

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
  const AllPost = await GetAllPosts();

  return (
    <div>
      <div className="bg-[url(https://pixner.net/aihire/aihire/assets/img/bn/breadcumndbg.jpg)]">
        <Menu />
      </div>
      <div className="flex justify-center bg-slate-200 h-fit gap-5">
        <div className="sticky top-0 h-[100%] my-[100px] ">
          <Filter />
        </div>
        <div className="my-[100px] pb-[100px]">
          <Projects AllPost={AllPost} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
