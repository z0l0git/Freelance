import { Filter } from "@/components/Filter/Filter";
import { HeaderSearch } from "@/components/HeaderSearch/HeaderSearch";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { Menu } from "@/components/Menu/Menu";
import React from "react";
import { Projects } from "@/components/Projects/Projects";
import { Footer } from "@/components/Footer/Footer";

const categoryAr = ["Python", "Software ", "API Integration", "Open AI"];

const page = () => {
  return (
    <div>
      <div className="bg-[url(https://pixner.net/aihire/aihire/assets/img/bn/breadcumndbg.jpg)]">
        <HeaderSearch />
        <Menu />
      </div>
      <div className="flex justify-center bg-slate-200">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default page;
