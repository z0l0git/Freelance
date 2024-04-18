"use client";
import React, { ChangeEvent, useEffect } from "react";
import axios from "axios";
import { Filter } from "../Filter/Filter";

import { Projects } from "./Projects";
import { useState } from "react";

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
    image: string;
  };
  title: string;
  description: string;
  budget: number;
  deliveryTime: string;
  flexible: boolean;
  category: DataType[];
  skills: SkillType[];
};

type PropsType = {
  data: DataType[];
  skills: SkillType[];
  AllPost: PosdtDataType[];
};
type BudgetType = {
  min: number;
  max: number;
};
export default function ProjectPageMidd(props: PropsType) {
  const { data, skills, AllPost } = props;

  const [skill, setSkill] = useState("");
  const [category, setCategory] = useState("");
  console.log(skill, "category");

  const [budget, setBudget] = useState<BudgetType>({ min: 0, max: 0 });
  const [search, setSearch] = useState("");
  const [tempStage, settempStage] = useState<boolean>();
  const [postData, setPostData] = useState<PosdtDataType[]>([]);
  console.log(postData, "postData");

  const [stage, setStage] = useState(true);

  const handlerClick = () => {
    setStage(true);
    setSearch("");
    setCategory("");
    setSkill("");
  };

  const handleSkillFilter = (e: SkillType) => {
    setSkill(e.id);
    setStage(false);
    setSearch("");
    setCategory("");

    const dataSkill: PosdtDataType[] = AllPost.filter((post) => {
      return post?.skills?.some((skill) => skill.name === e.name);
    });
    setPostData(dataSkill);
  };

  const hnadlecategoryFilter = (e: DataType) => {
    setCategory(e._id);

    setSearch("");
    setSkill("");
    setStage(false);

    const datacategory: PosdtDataType[] = AllPost.filter((post) => {
      return post?.category?.some((category) => category._id === e._id);
    });
    console.log(datacategory, "datacategory");

    setPostData(datacategory);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBudget({ ...budget, [name]: value });
    setStage(false);
    setCategory("");
  };

  useEffect(() => {
    setPostData(
      AllPost.filter((post) => {
        return post.budget >= budget.min && post.budget <= budget.max;
      })
    );
    // setStage(false);
  }, [budget]);

  const HnadleSearch = async () => {
    setCategory("");
    setSkill("");

    setStage(false);

    const body = {
      filter: {
        $or: [
          {
            title: {
              $regex: search,
              $options: "i",
            },
          },
        ],
      },
    };

    try {
      const { data } = await axios.post<PosdtDataType[]>(
        "https://freelance-gmjr.onrender.com/getAllProject",
        body
      );
      setPostData(data);

      console.log(data, "data");
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className="flex justify-center bg-slate-200 h-fit gap-5">
        <div className="sticky top-0 h-[100%] my-[100px] ">
          <Filter
            handlerClick={handlerClick}
            budget={budget}
            search={search}
            HnadleSearch={HnadleSearch}
            setSearch={setSearch}
            handleChange={handleChange}
            handleSkillFilter={handleSkillFilter}
            hnadlecategoryFilter={hnadlecategoryFilter}
            setStage={setStage}
            setSkill={setSkill}
            skill={skill}
            setCategory={setCategory}
            category={category}
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
