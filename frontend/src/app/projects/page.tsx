import { Filter } from "@/components/Filter/Filter";
import { HeaderSearch } from "@/components/HeaderSearch/HeaderSearch";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { Menu } from "@/components/Menu/Menu";
import React from "react";

const categoryAr = [
  "Python",
  "Software Architecture",
  "API Integration",
  "Open AI",
];

const page = () => {
  return (
    <div>
      <div className="bg-[url(https://pixner.net/aihire/aihire/assets/img/bn/breadcumndbg.jpg)]">
        <HeaderSearch />
        <Menu />
      </div>
      <div className=" flex flex-col lg:flex-row w-screen items-start justify-center bg-slate-200 gap-5 pt-32">
        <Filter jobs={"Local Jobs"} counter={"35"} />
        <ProjectCard
          title={"AI-powered Chatbot Development"}
          price={"$300"}
          description="Develop a conversational chatbot using natural language processing and machine learning techniques to provide automated customer support and assistance."
          category={categoryAr}
          expire={"343 days"}
          location={"Remote"}
          level={"Expensive"}
          proposal={"43 recieved"}
        />
      </div>
    </div>
  );
};

export default page;
