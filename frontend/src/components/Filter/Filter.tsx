import React from "react";
// import { ButtonWithBlueBorder } from "../Button";
import { Input } from "../../components/ui/input";
import { useState } from "react";
import { CheckCircle } from "../../components/ui/checkcircle";
import { MouseEvent } from "react";
import { useRouter } from "next/navigation";

type Filter = {
  jobs: string;
  counter: string;
};

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
  setSkill: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  data: DataType[];
  skills: SkillType[];
  skill: string;
  setStage: React.Dispatch<React.SetStateAction<boolean>>;
  handleClickOnFilter: (e: SkillType) => void;
  stage?: boolean;
  setPostData: React.Dispatch<React.SetStateAction<PosdtDataType[]>>;
};

export const Filter = (props: PropsType) => {
  const { data, skills, setStage, handleClickOnFilter, stage, setPostData } =
    props;

  // const { push } = useRouter();

  const handlerClick = () => {
    setStage(true);
  };
  return (
    <div className="flex bg-slate-100 rounded-xl scrollbar-hidden scrollbar-hide px-[10px] py-[20px] max-h-screen overflow-y-auto overflow-x-hidden justify-center">
      <div className="flex flex-col w-[352px] xl:w-[416px] h-fit rounded-xl p-8 bg-slate-50">
        <div className="w-[352px] h-[56px] pb-6 mb-6">
          <h3 className="text-2xl font-semibold">Filter</h3>
        </div>

        <Input
          className="w-full h-[56px] pb-6 mb-6 rounded-3xl bg-slate-200 p-3"
          type={"text"}
          id={"search"}
          placeholder={"search"}
        />

        <div className="w-[352px] h-[56px] pt-6 mb-5">
          <h2 className="text-2xl font-semibold">Types of Categories</h2>
        </div>
        <div className="flex flex-col gap-2">
          {data?.map((el, i) => {
            return (
              <div
                key={i}
                className="flex items-center justify-between w-352px h-[32px"
              >
                <div className="flex gap-2 items-center">
                  <CheckCircle className="" />
                  <h3 className="text-base font-medium">{el.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-[352px] h-[56px] pt-6 mb-1">
          <h2 className="text-2xl font-semibold">Budget</h2>
        </div>
        <div className="flex tems-center justify-center gap-8">
          <Input
            className="flex items-center justify-center p-4 w-28 h-10 border-solid border-slate-500 bg-slate-200 rounded-3xl"
            type={"number"}
            id={"min"}
            placeholder={"min"}
          />
          <span className="flex items-center justify-center">to</span>
          <Input
            className="flex items-center justify-center p-4 w-28 h-10 border-solid border-slate-500 bg-slate-200 rounded-3xl"
            type={"number"}
            id={"max"}
            placeholder={"max"}
          />
        </div>

        <div className="w-[352px] h-[56px] pt-6 mb-5">
          <h2 className="text-2xl font-semibold">Skills</h2>
        </div>
        <div className="flex flex-col gap-2">
          <div
            onClick={handlerClick}
            className="flex items-center justify-between w-352px h-[32px"
          >
            <div className="flex gap-2 items-center">
              <CheckCircle className="" checked={stage} />
              <h3 className="text-base font-medium">All project</h3>
            </div>
          </div>
          {skills?.map((el, i) => {
            return (
              <div
                onClick={() => handleClickOnFilter(el)}
                id={el.id}
                key={i}
                className="flex items-center justify-between w-352px h-[32px"
              >
                <div className="flex gap-2 items-center">
                  <CheckCircle />
                  <h3 className="text-base font-medium">{el.name}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <button className="flex items-center justify-center p-4 w-full h-12 border-solid border-[#0D47A1] border-2 bg-slate-50 rounded-3xl mt-8 text-base font-semibold text-[#0D47A1] ">
            Reset Filter
          </button>
        </div>
      </div>
    </div>
  );
};
