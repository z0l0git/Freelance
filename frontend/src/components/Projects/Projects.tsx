"use client";
import React from "react";
import { Filter } from "../Filter/Filter";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { AiFillPropertySafety } from "react-icons/ai";

type SkillType = {
  name: string;
  id: string;
};
type PosdtDataType = {
  createdBy: string;
  title: string;
  description: string;
  budget: string;
  deliveryTime: string;
  flexible: boolean;
  categorys: string[];
  skills: SkillType[];
};

type ProjectsProps = {
  AllPost: PosdtDataType[];
};

export const Projects = (props: ProjectsProps) => {
  const { AllPost } = props;
  // console.log(
  //   AllPost[5].skills.map((el2, index2) => {
  //     return el2.name;
  //   }),
  //   "as"
  // );

  return (

    <div className="flex items-start  justify-center  ">
     

      <div className="flex flex-col gap-[30px]">
        {AllPost?.map((el, index) => {
          return (
            <ProjectCard
              key={index}
              title={el.title}
              price={el.budget}
              description={el.description}
              category={el.skills?.map((el2, index2) => {
                return el2.name;
              })}
              // category={el.title}
            />
          );
        })}
      </div>
    </div>
  );
};

// export const Projects = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-start gap-5 justify-center pt-32 px-4">
//       <Filter jobs={"Local Jobs"} counter={"35"} />
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-screen-xl mx-auto">
//         {projects.map((el, i) => (
//           <ProjectCard
//             key={i}
//             title={el.title}
//             price={el.price}
//             description={el.description}
//             category={el.categoryCard}
//             expire={el.expire}
//             location={el.location}
//             level={el.level}
//             proposal={el.proposal}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
