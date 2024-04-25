"use client";
import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { set } from "react-hook-form";
import { MdCurrencyExchange } from "react-icons/md";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { Skills } from "../Profile/Skils";

import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

type SkillType = {
  name: string;
  id: any;
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
  postEdit?: PosdtDataType | undefined;
  skill?: SkillType[];
  handleCloseEdit: () => void;
  setProjects: React.Dispatch<
    React.SetStateAction<PosdtDataType[] | undefined>
  >;
  projects: PosdtDataType[] | undefined;
};

export const EditModal = (props: PropsType) => {
  const { postEdit, skill, handleCloseEdit, setProjects, projects } = props;
  console.log(postEdit, "postEdit");

  const [flexible, setFlexible] = useState(false);
  const [editOne, setEditOne] = useState<PosdtDataType>({
    _id: "",
    title: "",
    description: "",
    budget: 0,
    deliveryTime: "",
    flexible: false,
    category: [],
    skills: [],
  });
  console.log(editOne, "editOne");

  useEffect(() => {
    setEditOne({ ...editOne, flexible: flexible });
  }, [flexible]);

  useEffect(() => {
    if (postEdit) {
      setEditOne(postEdit);
      setFlexible(postEdit?.flexible);
    }
  }, [postEdit]);

  const HandleFlexible = () => {
    setFlexible(!flexible);
  };

  const handleChange = (el: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = el.target;
    setEditOne({ ...editOne, [name]: value });
  };

  const handleSkillClick = (event: MouseEvent<HTMLDivElement>) => {
    const categoryId = event.currentTarget.id;
    // setTestId(categoryId);
    const filteredSkillCategpry = skill?.find(({ id }) => id === categoryId);
    console.log(filteredSkillCategpry, "filteredSkillCategpry");

    const filtered = editOne?.skills.find(
      (el) => el === filteredSkillCategpry?.id
    );

    if (filtered) {
      console.log("you have already picked up ");

      setEditOne((prev) => ({
        ...prev,
        skills: prev.skills.filter((el) => el !== filteredSkillCategpry?.id),
      }));
    } else {
      filteredSkillCategpry &&
        setEditOne((prev) => ({
          ...prev,
          skills: [...prev.skills, filteredSkillCategpry?.id],
        }));
    }
  };

  const notifySuccess = () => {
    toast.success("🦄 Changes applied successfully.", {
      position: "top-center",
      autoClose: 4000,
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
    toast.error("❗Unable to update data. Please try again later", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  const handleEdit = async () => {
    try {
      const { data } = await axios.post(
        "https://freelance-gmjr.onrender.com/updateProject",
        editOne
      );
      console.log("Project updated successfully:", data);
      handleCloseEdit();

      handleCloseEdit();

      const ass: SkillType[] = [];

      editOne.skills?.forEach((el) => {
        const matchedSkill = skill?.find((el2) => el2.id === el);
        if (matchedSkill) {
          ass.push(matchedSkill);
        } else {
          ("");
        }
      });
      console.log(ass, "asss");

      const updatedEditOne = { ...editOne, skills: ass };

      const updatedPost: PosdtDataType[] | undefined = projects?.map((item) =>
        item._id === updatedEditOne._id ? updatedEditOne : item
      );
      console.log(updatedPost, "updatedPost");

      notifySuccess();

      setProjects(updatedPost);
    } catch (error: any) {
      notifyError();
      console.log("Error updating project:", error.message);
    }
  };

  return (
    <div className="flex flex-col gap-4 bg-white p-4 rounded-lg w-[450px]">
      <div>
        {" "}
        <div className="flex flex-col gap-4">
          <p className="font-bold text-[18px] text-[#212e48]">Edit your post</p>
          <div>
            <p>
              Keep it short and simple - this will help us match you to the
              right category.
            </p>
            <div className="bg-slate-300 rounded-[25px] border-2 border-slate-600 p-2 ml-[15px]">
              <input
                className="text-black flex flex-col-reverse bg-slate-300 outline-none w-[100%]"
                placeholder="Inter Title"
                name="title"
                value={editOne.title}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <p>Give in depth information about what you need.</p>
            <div className="ml-[15px] bg-slate-300 rounded-[25px] border-2 border-slate-600 p-2">
              <input
                name="description"
                value={editOne.description}
                className="text-black flex flex-col-reverse bg-slate-300 outline-none w-[100%] "
                type="text"
                placeholder="Write your text here..."
                onChange={(el: ChangeEvent<HTMLInputElement>) =>
                  handleChange(el)
                }
              />
            </div>
          </div>
          <div>
            <div>Required skills</div>
            <div className="w-[100%] flex flex-wrap gap-5 ml-[15px]">
              {skill?.map((el, index) => (
                <div
                  key={index}
                  id={el.id}
                  onClick={handleSkillClick}
                  className={`${
                    editOne?.skills.includes(el.id)
                      ? "bg-[#0D47A9] text-white"
                      : "bg-[#f8f9fc] text-black"
                  }  px-[10px] py-[5px] w-fit rounded-xl font-bold  text-[#404a60] text-[18px]`}
                >
                  {el.name}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-col ">
              <p className=" text-[18px] text-[#212e48]">Enter your budget</p>
              <div className="ml-[15px] flex bg-slate-300 rounded-[25px] border-2 border-slate-600 p-2">
                <input
                  type="number"
                  value={editOne.budget}
                  onChange={handleChange}
                  name="budget"
                  placeholder="Enter Budget (MNT)"
                  className="text-black flex flex-col-reverse bg-slate-300 outline-none w-[100%] "
                />
                <div className=" flex  justify-end items-center mr-[20px]   ">
                  <div className="">₮</div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 ml-[15px]">
                <Checkbox
                  id="terms"
                  onClick={HandleFlexible}
                  checked={flexible}
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Price is negotiable (Optional)
                </label>
              </div>
            </div>
          </div>
          <div>
            <p className=" text-[18px] text-[#212e48]">
              Enter delivery time in days
            </p>
            <div className="ml-[15px] flex bg-slate-300 rounded-[25px] border-2 border-slate-600 p-2">
              <input
                value={editOne.deliveryTime}
                onChange={handleChange}
                type="text"
                placeholder="day(s)"
                name="deliveryTime"
                className="text-black flex flex-col-reverse bg-slate-300 outline-none w-[100%]"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div
            onClick={handleEdit}
            className=" p-[10px] w-fit rounded-lg bg-blue-600 text-white mt-[20px] cursor-pointer hover:bg-blue-700 active:bg-blue-800 active:scale-[0.99]"
          >
            save changes
          </div>
        </div>
      </div>
    </div>
  );
};
