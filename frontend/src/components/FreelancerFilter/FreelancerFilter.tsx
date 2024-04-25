"use client";

import React, { ChangeEvent } from "react";
// import { ButtonWithBlueBorder } from "../Button";
import { Input } from "../../components/ui/input";
import { CheckCircle } from "../../components/ui/checkcircle";
import { FaStar } from "react-icons/fa6";
import { MdClear } from "react-icons/md";
import { MouseEvent } from "react";
import { BiSearch } from "react-icons/bi";

type BudgetType = {
  min: number;
  max: number;
};
type SkillType = {
  name: string;
  id: string;
};

type StarFilterType = {
  category: string;
};

type freelance = {
  mark: string;
  counter: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleZero: () => void;
  budget: BudgetType;
  Handlereset: () => void;
  skills: SkillType[];
  skillFilter: (e: SkillType) => void;
  skillId?: string;
  filterByStar: (e: StarFilterType) => void;
  starName?: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  HnadleSearch: () => Promise<void>;
};

const starCategory = [
  { category: "5 star" },
  { category: "4 star" },
  { category: "3 star" },
  { category: "2 star" },
  { category: "1 star" },
];
export const FreelancerFilter = (props: freelance) => {
  const {
    mark,
    counter,
    handleChange,
    handleZero,
    budget,
    Handlereset,
    skills,
    skillFilter,
    skillId,
    filterByStar,
    starName,
    setSearch,
    search,
    HnadleSearch,
  } = props;
  return (
    <div className="flex bg-slate-100 w-fit h-fit rounded-2xl">
      <div
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" }}
        className="flex flex-col w-fit md:w-fit md:h-fit sm:w-[696px] sm:h-[1747px] rounded-xl p-4 bg-slate-50"
      >
        <div className="w-[352px]">
          <h3 className="text-2xl font-semibold">Filter</h3>
        </div>

        {/* <div className="w-full h-[46px] px-[10px] flex items-center justify-between rounded-3xl bg-slate-200">
          <input
            className="w-[90%] text-[20px] bg-slate-200  outline-none"
            type={"text"}
            placeholder={"search by name"}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <BiSearch className="text-[30px]" onClick={HnadleSearch} />
        </div> */}

        <div className="w-[352px] h-[56px] pt-6 mb-1">
          <h2 className="text-2xl font-semibold">Budget</h2>
        </div>
        <div className="flex tems-center justify-center gap-6 ml-[8px]">
          <Input
            className="flex items-center justify-center p-4 w-28 h-10 border-solid border-slate-500 bg-slate-200 rounded-3xl"
            type={"number"}
            placeholder={"min"}
            name="min"
            value={budget.min ? budget.min : ""}
            onChange={(el) => handleChange(el)}
          />
          <span className="flex items-center justify-center">to</span>
          <Input
            className="flex items-center justify-center p-4 w-28 h-10 border-solid border-slate-500 bg-slate-200 rounded-3xl"
            type={"number"}
            placeholder={"max"}
            name="max"
            value={budget.max ? budget.max : ""}
            onChange={(el) => handleChange(el)}
          />
          <div
            onClick={handleZero}
            className="flex items-center justify-center text-[30px] font-semibold"
          >
            <MdClear />
          </div>
        </div>
        <div className="w-[352px]  pt-2 mb-1">
          <h2 className="text-2xl font-semibold">Skills</h2>
        </div>
        <div className="flex flex-col gap-2 ml-[8px]">
          {skills.map((el, i) => {
            return (
              <div
                onClick={() => skillFilter(el)}
                id={el.id}
                key={i}
                className="flex items-center justify-between w-352px h-[32px"
              >
                <div className="flex gap-2 items-center">
                  <CheckCircle className="" checked={skillId === el.id} />
                  <h3 className="text-base font-medium">{el.name}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-[352px]  pt-2 mb-1">
          <h2 className="text-2xl font-semibold">Star Category</h2>
        </div>
        <div className="flex flex-col gap-2 ml-[8px]">
          {starCategory.map((el, i) => {
            return (
              <div
                key={i}
                onClick={() => filterByStar(el)}
                className="flex items-center justify-between w-352px h-[32px"
              >
                <div className="flex gap-2 items-center">
                  <CheckCircle
                    className=""
                    checked={starName === el.category}
                  />
                  <FaStar
                    className="flex w-5 h-5 justify-center items-center "
                    color="#ffbe57"
                  />
                  <h3 className="text-base font-medium">{el.category}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div>
            <button
              onClick={Handlereset}
              className="flex items-center justify-center p-4 w-full h-12 border-solid border-[#0D47A1] border-2 bg-slate-50 rounded-3xl mt-8 text-base font-semibold text-[#0D47A1] "
            >
              Reset Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
