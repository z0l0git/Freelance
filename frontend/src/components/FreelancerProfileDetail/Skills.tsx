"use client ";
import React, { useEffect, useState } from "react";
import { WhiteButton } from "../Button";
import { FormComp } from "./FormComp";
import { IoCloseCircleSharp } from "react-icons/io5";
import { MouseEvent } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import axios from "axios";
type SkillType = {
  name: string;
  id: string;
};
type SkillT = {
  id?: string;
};

type PropsType = {
  skill: SkillType[];
};

export const Skills = (props: PropsType) => {
  const { skill } = props;

  const { data } = useContext(DataContext);
  console.log(data, "dataaa");

  console.log(skill, "skil3333");
  const [addSkills, setAddSkills] = useState(false);

  const [skillData, setSkillData] = useState<SkillT[]>([]);
  console.log(skillData, "skill data");

  useEffect(() => {
    setSkillData(data?.skills);
  }, [data]);

  const clickButton = () => {
    setAddSkills(!addSkills);
  };

  const handleSkillData = (event: MouseEvent<HTMLDivElement>) => {
    const SkillId: any = event.currentTarget.id;
    console.log(SkillId, "skill id");

    const selectedSkill = skill.find((skill) => skill.id === SkillId);

    if (selectedSkill) {
      const filteredSkilllArray = skillData.find((skill) => skill === SkillId);

      if (filteredSkilllArray) {
        setSkillData((prev) => prev.filter((skill) => skill !== SkillId));
      } else {
        setSkillData((prev) => [...prev, SkillId]);
      }
    }
  };

  const upSkills = async () => {
    try {
      const { data: skilledBaachka } = await axios.post(
        "http://localhost:8000/skillUp",
        {
          id: data?._id,
          skills: skillData,
        }
      );
      clickButton();
      console.log(skilledBaachka, "newww");
    } catch (err: any) {
      console.log(err.message, "error");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold xl:text-xl">Skills</h3>
        {!addSkills ? (
          <WhiteButton
            buttonClass="font-bold text-[#0d47a1] cursor-pointer xl:text-md"
            onClick={clickButton}
            buttonName="Add New"
          />
        ) : (
          <IoCloseCircleSharp onClick={clickButton} className="w-6 h-6" />
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {skill?.map((el, index) => {
          return (
            <div key={index} onClick={handleSkillData} id={el.id}>
              <WhiteButton
                disabled={!addSkills}
                buttonName={el.name}
                buttonClass={`rounded-[100px] border-[#DFE0E4] border px-4 py-3 overflow-hidden  text-sm  text-[#404A60] flex items-center gap-1 ${
                  skillData?.some((skill) => skill === el.id)
                    ? "bg-[#0D47A9] text-white"
                    : "bg-[#f8f9fc] text-black"
                }`}
              />
            </div>
          );
        })}
      </div>

      {addSkills && (
        <div className="w-full  flex p-4 justify-end" onClick={upSkills}>
          <button
            // onClick={UpJobTitle}
            className="px-[10px] py-[5px] bg-blue-800 rounded-lg text-white font-bold"
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};
