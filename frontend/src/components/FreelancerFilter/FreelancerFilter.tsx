"use client";

import React, { ChangeEvent } from "react";
// import { ButtonWithBlueBorder } from "../Button";
import { Input } from "../../components/ui/input";
import { CheckCircle } from "../../components/ui/checkcircle";
import { FaStar } from "react-icons/fa6";
import { MdClear } from "react-icons/md";
import { MouseEvent } from "react";

type BudgetType = {
  min: number;
  max: number;
};
type SkillType = {
  name: string;
  id: string;
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
};

const typeCategory = [
  { category: "NPL specialists", count: 45 },
  { category: "Social developers", count: 30 },
  { category: "Badjet specialists", count: 23 },
  { category: "Accounters", count: 15 },
  { category: "Translators", count: 22 },
  { category: "Web developers", count: 22 },
  { category: "Tender specialists", count: 22 },
  { category: "Project managers", count: 22 },
  { category: "English teacher", count: 22 },
];

const deliveryCategory = [
  { category: "1-3 Days", count: 35 },
  { category: "Week", count: 20 },
  { category: "1-3 Weeks", count: 10 },
  { category: "Month", count: 22 },
  { category: "1-3 Months", count: 15 },
  { category: "1-3 Months", count: 16 },
  { category: "6-Months", count: 6 },
  { category: "Less then Year", count: 9 },
];

const responseCategory = [
  { category: "1 Hour ", count: 11 },
  { category: "2 Hours", count: 22 },
  { category: "1 Day", count: 16 },
  { category: "2 Days", count: 9 },
  { category: "3 Days", count: 8 },
  { category: "Week", count: 10 },
  { category: "Month", count: 5 },
];
const starCategory = [
  { category: "5 star" },
  { category: "4 star" },
  { category: "3 star" },
  { category: "2 star" },
  { category: "1 star" },
];
const locationCategory = [
  { category: "Mongolia" },
  { category: "Australia" },
  { category: "United States of America" },
  { category: "Great Britania" },
  { category: "France" },
  { category: "Spain" },
  { category: "India" },
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
  } = props;
  return (
    <div className="flex bg-slate-100 w-fit h-fit rounded-2xl">
      <div
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" }}
        className="flex flex-col w-fit h-[1925px] md:w-fit md:h-fit sm:w-[696px] sm:h-[1747px] rounded-xl p-8 bg-slate-50"
      >
        <div className="w-[352px] h-[56px] pb-6 mb-6">
          <h3 className="text-2xl font-semibold">Filter</h3>
        </div>

        <Input
          className="w-[352px] h-[56px] items-start justify-center p-3 mb-6 rounded-3xl bg-slate-200 "
          type={"text"}
          id={"search"}
          placeholder={"search"}
        />

        <div className="w-[352px] h-[56px] pt-6 mb-1">
          <h2 className="text-2xl font-semibold">Types of Categories</h2>
        </div>
        <div className="flex flex-col gap-2">
          {typeCategory.map((el, i) => {
            return (
              <div
                key={i}
                className="flex items-center justify-between w-352px h-[32px"
              >
                <div className="flex gap-2 items-center">
                  <CheckCircle className="" />
                  <h3 className="text-base font-medium">{el.category}</h3>
                </div>
                <span>{el.count}</span>
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
        <div className="w-[352px] h-[56px] pt-6 mb-1">
          <h2 className="text-2xl font-semibold">Skills</h2>
        </div>
        <div className="flex flex-col gap-2">
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
        <div className="w-[352px] h-[56px] pt-6 mb-1">
          <h2 className="text-2xl font-semibold">Delivery time</h2>
        </div>
        <div className="flex flex-col gap-2">
          {deliveryCategory.map((el, i) => {
            return (
              <div
                key={i}
                className="flex items-center justify-between w-352px h-[32px"
              >
                <div className="flex gap-2 items-center">
                  <CheckCircle className="" />
                  <h3 className="text-base font-medium">{el.category}</h3>
                </div>
                <span>{el.count}</span>
              </div>
            );
          })}
        </div>
        <div className="w-[352px] h-[56px] pt-6 mb-1">
          <h2 className="text-2xl font-semibold">Response Time</h2>
        </div>
        <div className="flex flex-col gap-2">
          {responseCategory.map((el, i) => {
            return (
              <div
                key={i}
                className="flex items-center justify-between w-352px h-[32px"
              >
                <div className="flex gap-2 items-center">
                  <CheckCircle className="" />
                  <h3 className="text-base font-medium">{el.category}</h3>
                </div>
                <span>{el.count}</span>
              </div>
            );
          })}
        </div>
        <div className="w-[352px] h-[56px] pt-6 mb-1">
          <h2 className="text-2xl font-semibold">Star Category</h2>
        </div>
        <div className="flex flex-col gap-2">
          {starCategory.map((el, i) => {
            return (
              <div
                key={i}
                className="flex items-center justify-between w-352px h-[32px"
              >
                <div className="flex gap-2 items-center">
                  <CheckCircle className="" />
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
          <div className="w-[352px] h-[56px] pt-6 mb-1">
            <h2 className="text-2xl font-semibold">Location</h2>
          </div>
          <div className="flex flex-col gap-2">
            {locationCategory.map((el, i) => {
              return (
                <div
                  key={i}
                  className="flex items-center justify-between w-352px h-[32px"
                >
                  <div className="flex gap-2 items-center">
                    <CheckCircle className="" />
                    <h3 className="text-base font-medium">{el.category}</h3>
                  </div>
                </div>
              );
            })}
          </div>
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
