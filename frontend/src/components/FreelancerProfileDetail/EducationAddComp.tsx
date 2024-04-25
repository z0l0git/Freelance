"use client";
import { ChangeEvent, useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import axios from "axios";

import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

type eduType = {
  startedY: string;
  profession: string;
  finishedY: string;
  degree: string;
  schoolName: string;
  aboutSchool: string;
  _id: string;
};

type getDataType = {
  _id: string;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  auth: string;
  socials: [];
  skills: [];
  education: eduType[];
  workExp: [];
  createdAt: string;
};
type Props = {
  clickButton: () => void;
  HandlePushEduArray: (obj: eduType) => void;
};
export const EducationAddComp = (props: Props) => {
  const { clickButton, HandlePushEduArray } = props;

  const [eduData, setEduData] = useState({
    startedY: "",
    finishedY: "",
    degree: "",
    schoolName: "",
    aboutSchool: "",
    id: "",
    profession: "",
  });

  console.log(eduData, "edu");

  const { data } = useContext(DataContext);

  const handlechange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEduData({ ...eduData, [name]: value });
  };

  useEffect(() => {
    setEduData({
      ...eduData,
      id: data._id,
    });
  }, [data]);

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

  const AddnewEducation = async () => {
    try {
      const { data } = await axios.post<getDataType>(
        "https://freelance-gmjr.onrender.com/createEducation",
        eduData
      );
      console.log(data, "yahuu");

      // console.log(
      //   data?.education[data?.education.length - 1],
      //   "hiiiiiiiiiiiiiiii"
      // );

      HandlePushEduArray(data?.education[data?.education?.length - 1]);
      clickButton();
      notifySuccess();
    } catch (err: any) {
      notifyError();
      console.log(err.message);
    }
  };

  return (
    <div className="flex rounded-3xl bg-gray-100 w-full h-fit">
      <div className="w-full h-fit flex flex-col p-5 gap-4">
        <div className="flex justify-between items-center ">
          <input
            type="number"
            className="bg-white border rounded-2xl p-3 w-[45%]"
            placeholder=" started year"
            name="startedY"
            min={1939}
            max={2024}
            onChange={(e) => handlechange(e)}
          />
          <div className="text-slate-400">to</div>

          <input
            min={1939}
            max={2024}
            type="number"
            className="bg-white border rounded-2xl p-3 w-[45%]"
            placeholder="finished year"
            name="finishedY"
            onChange={(e) => handlechange(e)}
          />
        </div>
        <input
          type="text"
          className="bg-white border rounded-2xl p-3"
          placeholder="Enter your school name"
          name="schoolName"
          onChange={(e) => handlechange(e)}
        />
        <input
          type="text"
          className="bg-white border rounded-2xl p-3"
          placeholder="Enter your degree"
          name="degree"
          onChange={(e) => handlechange(e)}
        />

        <input
          type="text"
          className="bg-white border rounded-2xl p-3"
          placeholder="profession"
          name="profession"
          onChange={(e) => handlechange(e)}
        />

        <input
          type="text"
          className="bg-white border rounded-2xl p-3"
          placeholder="Tell me about your school"
          name="aboutSchool"
          onChange={(e) => handlechange(e)}
        />
        <div className="w-full flex justify-around p-4">
          <button onClick={AddnewEducation} className="skillUpdateButton">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
