import React from "react";

import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { HomeCardJobs } from "@/components/HomeCard/HomeCardJobs";
import { FreelancerCard } from "@/components/FreelancerCardComponent/FreelancerCard";
import { FreelancerFilter } from "@/components/FreelancerFilter/FreelancerFilter";
import { Filter } from "@/components/Filter/Filter";

const categoryAr = [
  "Python",
  "Software Architecture",
  "API Integration",
  "Open AI",
];

// const projects = [
//   {
//     title: "Facebook page's developer",
//     price: "Negotiate",
//     description:
//       "Манай дэлгүүр өөрийн ФБ хуудсыг хөтөлж явуулах хөгжүүлэгчийг хайж байна, тус хуудас дотор байгаа онцлох барааг бүүст хийх, чатбот ажиллуулах зэрэг ажлуудыг хийж гүйцэтгэх юм.",
//     categoryCard: categoryAr,
//     expire: "21 days",
//     location: "Remote",
//     level: "Junior",
//     proposal: "5 received",
//   },
//   {
//     title: "Chinese translator",
//     price: "$100",
//     description: "Full text for 20 pages",
//     categoryCard: categoryAr,
//     expire: "Week",
//     location: "Remote",
//     level: "Mid",
//     proposal: "Proposal",
//   },
//   {
//     title: "Accounter",
//     price: "$250",
//     description: "Company's annual finalcial report",
//     categoryCard: categoryAr,
//     expire: "Week",
//     location: "Location",
//     level: "Level",
//     proposal: "Proposal",
//   },
// ];
const freelancer = [
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Sogtuu Master",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Bardam Tuulai",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Gostuu Amaraa",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Anzog Agaa",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Hariugui gar",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Targan Galaa",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Blaavgai",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "bas neg Blaavgai",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Har Baagii",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },

  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Nayantai",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Sogtuu Master",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Sogtuu Master",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Sogtuu Master",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Sogtuu Master",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Sogtuu Master",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
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
      {/* <HomeCardJobs /> */}
      {/* <ProjectCard /> */}
      {/* <FreelancerCard /> */}
      {/* <FreelancerFilter /> */}
      <div className="flex flex-wrap md:flex-row flex-col w-screen items-start justify-center bg-slate-200 gap-5 pt-32">
        <div></div>
        <FreelancerFilter mark={"NPL specialists"} counter={"45"} />
        <div className="flex max-w-full w-[880px] flex-wrap gap-[20px]">
          {freelancer.map((el, i) => {
            return (
              <FreelancerCard
                key={i}
                star={el.star}
                level={el.level}
                levelrank={el.levelrank}
                name={el.name}
                worktype={el.worktype}
                experience={el.experience}
                wages={el.wages}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Chinzorig;
