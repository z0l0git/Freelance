"use client ";
import React, { useEffect, useState } from "react";
import { WhiteButton } from "../Button";
import { IoCloseCircleSharp } from "react-icons/io5";
import { MouseEvent } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import axios from "axios";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

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

  const [addSkills, setAddSkills] = useState(false);

  const [skillData, setSkillData] = useState<SkillT[]>([]);

  useEffect(() => {
    setSkillData(data?.skills);
  }, [data]);

  const clickButton = () => {
    setAddSkills(!addSkills);
  };

  const handleSkillData = (event: MouseEvent<HTMLDivElement>) => {
    const SkillId: any = event.currentTarget.id;

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

  const notifySuccess = () => {
    toast.success("🆕Success! Your profile edits have been saved.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const notifyError = () => {
    toast.error("❗️Oops! Profile update failed. Please try again later.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const upSkills = async () => {
    try {
      const { data: skilledBaachka } = await axios.post(
        "https://freelance-gmjr.onrender.com/skillUp",
        {
          id: data?._id,
          skills: skillData,
        }
      );
      clickButton();
      console.log(skilledBaachka, "newww");
      notifySuccess();
    } catch (err: any) {
      console.log(err.message, "error");
      notifyError();
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="skillTitle">Skills</h3>
        {!addSkills ? (
          <WhiteButton
            buttonClass="skillEditButton"
            onClick={clickButton}
            buttonName="Add New"
          />
        ) : (
          <IoCloseCircleSharp onClick={clickButton} className="skillCancel" />
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {skill?.map((el, index) => {
          return (
            <div key={index} onClick={handleSkillData} id={el.id}>
              <WhiteButton
                disabled={!addSkills}
                buttonName={el.name}
                buttonClass={`rounded-[100px] border-[#DFE0E4] border px-4 py-3 overflow-hidden cursor-pointer  text-sm  text-[#404A60] flex items-center gap-1 ${
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
            className="skillUpdateButton"
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};
