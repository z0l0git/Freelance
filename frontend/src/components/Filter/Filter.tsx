import React from "react";
// import { ButtonWithBlueBorder } from "../Button";
import { Input } from "../../components/ui/input";
import { CheckCircle } from "../../components/ui/checkcircle";
import { GetProjectCategory, GetSkillCategory } from "@/app/new-gig/page";
import { MouseEvent } from "react";
type Filter = {
  jobs: string;
  counter: string;
};

type SkillType = {
  name: string;
  id: string;
};

type PosdtDataType = {
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

type DataType = {
  name: string;
  description: string;
  _id: string;
};

type Props = {
  skills: SkillType[];
  data: DataType[];
  setFiltered: React.Dispatch<React.SetStateAction<PosdtDataType[]>>;
};

export const Filter = (props: Props) => {
  const { skills, data, setFiltered } = props;
  // const data: DataType[] = await GetProjectCategory();
  // const skills: SkillType[] = await GetSkillCategory()

  const HandlerclickOnSkill = (event: MouseEvent<HTMLDivElement>) => {
    const skillId = event.currentTarget.id;

    // setFiltered((prev) => prev.filter((el) => el.skills.id === skillId));
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
          {data.map((el, i) => {
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
        <div className="w-[352px] h-[56px] pt-6 mb-5">
          <h2 className="text-2xl font-semibold">Budget</h2>
        </div>
        <div className="flex gap-8">
          <div className="flex items-center justify-center p-4 w-36 h-12 border-solid border-slate-500 bg-slate-200 rounded-3xl">
            Min
          </div>
          <span className="flex items-center justify-center">to</span>
          <div className="flex items-center justify-center p-4 w-36 h-12 border-solid border-slate-500 bg-slate-200 rounded-3xl">
            Max
          </div>
        </div>

        <div className="w-[352px] h-[56px] pt-6 mb-5">
          <h2 className="text-2xl font-semibold">Skills</h2>
        </div>
        <div className="flex flex-col gap-2">
          {skills.map((el, i) => {
            return (
              <div
                key={i}
                className="flex items-center justify-between w-352px h-[32px"
                onClick={HandlerclickOnSkill}
                id={el.id}
              >
                <div className="flex gap-2 items-center">
                  <CheckCircle className="" />
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
