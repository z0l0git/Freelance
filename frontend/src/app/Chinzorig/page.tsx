import React from "react";

import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { HomeCardJobs } from "@/components/HomeCard/HomeCardJobs";
import { FreelancerCard } from "@/components/FreelancerCardComponent/FreelancerCard";
import { FreelancerFilter } from "@/components/FreelancerFilter/FreelancerFilter";
import { Filter } from "@/components/Filter/Filter";
import { Contact } from "@/components/Contact/Contact";

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
    name: "Жигжидийн Билэгт",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Бархас",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Төгөлдөр",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Соривт",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Унага",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Цэлмэг",
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
    name: "Мөнхжин",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },

  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Тулгаа",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Ганг Сайнаа",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Золоо",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "Ангийн дарга",
    worktype: "Full-time",
    experience: "6-9 Years",
    wages: "$50/h",
  },
  {
    star: "5.0",
    level: "Level1",
    levelrank: "(34)",
    image: "",
    name: "",
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

      {/* <Filter /> */}
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
      <div className="flex md:flex-row flex-col w-screen items-start justify-center bg-slate-200 gap-5 pt-32">
        <FreelancerFilter mark={"NPL specialists"} counter={"45"} />
        <div className="flex w-fit md:w-[880px] sm:w-[800px]  h-fit  flex-wrap justify-center items-center gap-[30px] ">
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
