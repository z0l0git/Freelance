import React from "react";
// import { ButtonWithBlueBorder } from "../Button";
import { Input } from "../../components/ui/input";
import { useState } from "react";
import { CheckCircle } from "../../components/ui/checkcircle";
import { MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import { BiSearch } from "react-icons/bi";
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
  category: DataType[];
  skills: SkillType[];
};
type BudgetType = {
  min: number;
  max: number;
};

type PropsType = {
  setSkill: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  data: DataType[];
  skills: SkillType[];
  skill: string;
  setStage: React.Dispatch<React.SetStateAction<boolean>>;
  handleSkillFilter: (e: SkillType) => void;
  hnadlecategoryFilter: (e: DataType) => void;
  stage?: boolean;
  setPostData: React.Dispatch<React.SetStateAction<PosdtDataType[]>>;
  category: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  HnadleSearch: () => Promise<void>;
  search?: string;
  budget: BudgetType;
  handlerClick: () => void;
};

export const Filter = (props: PropsType) => {
  const {
    handlerClick,

    data,
    skills,
    skill,
    setStage,
    handleSkillFilter,
    stage,
    hnadlecategoryFilter,
    category,
    handleChange,
    setSearch,
    HnadleSearch,
    search,
    budget,
  } = props;

  // const { push } = useRouter();

  return (
    <div className="flex bg-slate-50 rounded-xl scrollbar-hidden scrollbar-hide px-[10px] py-[20px] max-h-screen f-fit justify-center">
      <div className="flex flex-col w-[352px] xl:w-[416px] h-fit rounded-xl p-8 ">
        <div className="w-[352px] h-[56px] ">
          <h3 className="text-2xl font-semibold ml-[-14px]">Filter</h3>
        </div>

        <div className="w-full h-[46px] px-[10px] flex items-center justify-between rounded-3xl bg-slate-200">
          <input
            className="w-[90%] text-[20px] bg-slate-200  outline-none"
            type={"text"}
            placeholder={"search by title"}
            value={search}
            onChange={(el) => setSearch(el.target.value)}
          />
          <BiSearch className="text-[30px]" onClick={HnadleSearch} />
        </div>

        <div className="w-[352px] h-[56px] pt-6 mb-5">
          <h2 className="text-2xl font-semibold ml-[-14px]">
            Types of Categories
          </h2>
        </div>
        <div className="flex flex-col gap-2">
          {data?.map((el, i) => {
            return (
              <div
                onClick={() => hnadlecategoryFilter(el)}
                id={el._id}
                key={i}
                className="flex items-center justify-between w-352px h-[32px"
              >
                <div className="flex gap-2 items-center">
                  <CheckCircle className="" checked={category === el._id} />
                  <h3 className="text-base font-medium">{el.name}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-[352px] h-[56px] pt-6 mb-5">
          <h2 className="text-2xl font-semibold ml-[-14px]">Budget</h2>
        </div>
        <div className="flex gap-8">
          <div className="flex items-center justify-center p-4 w-36 h-12 border-solid border-slate-500 bg-slate-200 rounded-3xl">
            <input
              className="w-[97px] bg-slate-200 outline-none"
              placeholder="Min"
              name="min"
              type="number"
              onChange={(event) => handleChange(event)}
            />
          </div>
          <span className="flex items-center justify-center">to</span>
          <div className="flex items-center justify-center p-4 w-36 h-12 border-solid border-slate-500 bg-slate-200 rounded-3xl">
            <input
              className="w-[97px] bg-slate-200 outline-none"
              placeholder="Max"
              name="max"
              type="number"
              onChange={(event) => handleChange(event)}
            />
          </div>

        </div>

        <div className="w-[352px] h-[56px] pt-6 mb-5">
          <h2 className="text-2xl font-semibold ml-[-14px]">Skills</h2>
        </div>
        <div className="flex flex-col gap-2">
          {skills?.map((el, i) => {
            return (
              <div
                onClick={() => handleSkillFilter(el)}
                id={el.id}
                key={i}
                className="flex items-center justify-between w-352px h-[32px"
              >
                <div className="flex gap-2 items-center">
                  <CheckCircle checked={skill === el.id} />
                  <h3 className="text-base font-medium">{el.name}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <button
            onClick={handlerClick}
            className="flex items-center  justify-center p-4 w-full h-12 border-solid border-[#0D47A1] border-2 bg-slate-50 rounded-3xl mt-8 text-base font-semibold text-[#0D47A1] "
          >
            Reset Filter
          </button>
        </div>
      </div>
    </div>
  );
};
