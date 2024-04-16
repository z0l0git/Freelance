"use client";
import React from "react";

import { ProjectCard } from "../ProjectCard/ProjectCard";

import { MouseEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type SkillType = {
  name: string;
  id: string;
};

type DataType = {
  name: string;
  description: string;
  _id: string;
};
type PosdtDataType = {
  _id: string;
  createdBy?: {
    firstName: string;
    lastName: string;
  };
  title: string;
  description: string;
  budget: number;
  deliveryTime: string;
  flexible: boolean;
  category: DataType[];
  skills: SkillType[];
};

type ProjectsProps = {
  AllPost: PosdtDataType[];
  postData: PosdtDataType[];
  stage: boolean;
};

export const Projects = (props: ProjectsProps) => {
  const { AllPost, postData, stage } = props;
  const { push } = useRouter();

  const handlerClick = (event: MouseEvent<HTMLDivElement>) => {
    const projectId = event.currentTarget.id;

    push(`/projectDetail?id=${projectId}`);
  };

  return (
    <div className="flex items-start  justify-center  ">
      <div className="flex flex-col-reverse gap-[30px]">
        {stage ? (
          <>
            {AllPost?.map((el, index) => {
              return (
                <div key={index} id={el._id} onClick={handlerClick}>
                  <ProjectCard
                    title={el.title}
                    price={el.budget.toLocaleString()}
                    description={el.description}
                    flexible={el.flexible}
                    createdby={
                      el.createdBy?.firstName + " " + el.createdBy?.lastName
                    }
                    category={el.skills?.map((el2, index2) => {
                      return el2.name;
                    })}
                  />
                </div>
              );
            })}
          </>
        ) : (
          <>
            <div>
              {postData?.length === 0 && (
                <div className="rounded-xl p-8 pb-0 bg-slate-50 w-[720px] h-[340px]">
                  <Image alt="" src="/error.png" width={600} height={300} />
                </div>
              )}
            </div>
            {postData?.map((el, index) => {
              return (
                <div key={index} id={el._id} onClick={handlerClick}>
                  <ProjectCard
                    title={el.title}
                    price={el.budget.toLocaleString()}
                    description={el.description}
                    flexible={el.flexible}
                    createdby={
                      el.createdBy?.firstName + " " + el.createdBy?.lastName
                    }
                    category={el.skills?.map((el2, index2) => {
                      return el2.name;
                    })}
                  />
                </div>
              );
            })}
          </>
        )}
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
