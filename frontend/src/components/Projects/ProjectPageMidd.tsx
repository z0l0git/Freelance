"use client";
import React, { useEffect } from "react";

import { Filter } from "../Filter/Filter";

import { Projects } from "./Projects";
import { useState } from "react";
import ProjectsGet from "./ProjectsGet";
import { useRouter } from "next/navigation";
type DataType = {
  name: string;
  description: string;
  _id: string;
};
type SkillType = {
  name: string;
  id: string;
};

type PosdtDataType = {
  _id: string;
  createdBy: {
    firstName: string;
    lastName: string;
  };
  title: string;
  description: string;
  budget: number;
  deliveryTime: string;
  flexible: boolean;
  categorys: string[];
  skills: SkillType[];
};

type PropsType = {
  data: DataType[];
  skills: SkillType[];
  AllPost: PosdtDataType[];
};
export default function ProjectPageMidd(props: PropsType) {
  const { data, skills, AllPost } = props;

  const [skill, setSkill] = useState("");
  console.log(skill);
  const [category, setCategory] = useState("");
  const [stage, setStage] = useState(true);

  const [postData, setPostData] = useState<PosdtDataType[]>([]);
  console.log(postData, "postdataa");

  const handleClickOnFilter = (e: SkillType) => {
    setSkill(e.name);
    setStage(false);

    setPostData((prev) => {
      const Founded = postData.filter((el) =>
        el.skills.some((skill) => skill.name === e.name)
      );
      console.log(Founded, "founded");

      const filtered = postData?.filter((el) => {
        return el.skills.some((skill) => skill.name !== e.name);
      });
      console.log(filtered, "filterdd");

      // if (Founded) {
      //   return filtered;
      // }else{

      // }

      return [
        ...prev,
        ...AllPost.filter((post) => {
          return post.skills.some((skill) => skill.name === e.name);
        }),
      ];

      // if (Founded) {
      //   return {
      //     ...prev,
      //     filtered,
      //   };
      // } else {
      //   // return [
      //   //   ...prev,
      //   //   ...AllPost.filter((post) => {
      //   //     return post.skills.some((skill) => skill.name === e.name);
      //   //   }),
      //   // ];
      // }
    });

    // nohtsol shalgaj prev hiine÷]
  };

  return (
    <div>
      <div className="flex justify-center bg-slate-200 h-fit gap-5">
        <div className="sticky top-0 h-[100%] my-[100px] ">
          <Filter
            handleClickOnFilter={handleClickOnFilter}
            setStage={setStage}
            setSkill={setSkill}
            skill={skill}
            setCategory={setCategory}
            data={data}
            skills={skills}
            stage={stage}
            setPostData={setPostData}
          />
        </div>

        <div className="my-[100px] pb-[100px]">
          <Projects AllPost={AllPost} postData={postData} stage={stage} />
        </div>
      </div>
    </div>
  );
}
