import React from "react";
import { Filter } from "../Filter/Filter";
import { ProjectCard } from "../ProjectCard/ProjectCard";

const categoryAr = ["Python", "Software ", "API Integration", "Open AI"];

const projects = [
  {
    title: "Facebook page's developer",
    price: "Negotiate",
    description:
      "Манай дэлгүүр өөрийн ФБ хуудсыг хөийг хайж байна, тус хуудас дотор байгаа онцлох барааг бүүст хийх, чатбот ажиллуулах зэрэг ажлуудыг хийж гүйцэтгэх юм.",
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

export const Projects = () => {
  return (
    <div className="flex items-start gap-5 justify-center pt-32">
      <Filter jobs={"Local Jobs"} counter={"35"} />
      <div className="flex flex-col gap-[30px]">
        {projects.map((el, i) => {
          return (
            <ProjectCard
              key={i}
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
    </div>
  );
};