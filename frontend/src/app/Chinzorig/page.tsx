import React from "react";

import { Filter } from "../../components/Filter/Filter";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { HomeCardJobs } from "@/components/HomeCard/HomeCardJobs";

const categoryAr = [
  "Python",
  "Software Architecture",
  "API Integration",
  "Open AI",
];

const projects = [
  {
    title: "Facebook page's developer",
    price: "Negotiate",
    description:
      "Манай дэлгүүр өөрийн ФБ хуудсыг хөтөлж явуулах хөгжүүлэгчийг хайж байна, тус хуудас дотор байгаа онцлох барааг бүүст хийх, чатбот ажиллуулах зэрэг ажлуудыг хийж гүйцэтгэх юм.",
    categoryCard: categoryAr,
    expire: "21 days",
    location: "Remote",
    level: "Junior",
    proposal: "5 received",
  },
  {
    title: "Chinese translator",
    price: "$100",
    description: "Full 20 pages",
    categoryCard: categoryAr,
    expire: "Week",
    location: "Remote",
    level: "Mid",
    proposal: "Proposal",
  },
  {
    title: "Accounter",
    price: "$250",
    description: "Company's annual finalcial report",
    categoryCard: categoryAr,
    expire: "Week",
    location: "Location",
    level: "Level",
    proposal: "Proposal",
  },
];

const Chinzorig = () => {
  return (
    <div>
      {/* <Contact /> */}
      {/* <div className="flex w-screen items-start justify-center bg-slate-200 gap-5 pt-32">
        <Filter jobs={"Local Jobs"} counter={"35"} />
        <div className="flex flex-col gap-[30px]">
          {projects.map((el, i) => {
            return (
              <ProjectCard
                title={el.title}
                price={el.price}
                description={el.description}
                category={el.categoryCard}
                expire={el.expire}
                location={el.location}
                level={el.level}
                proposal={el.proposal}
              />
            );
          })}
        </div>
      </div> */}
      <HomeCardJobs />
    </div>
  );
};

export default Chinzorig;
