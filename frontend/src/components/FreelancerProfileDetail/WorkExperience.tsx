"use client";
import { ChangeEvent, useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import axios from "axios";

import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
type Props = {
  clickButton: () => void;
};
export const WorkExperienceComp = (props: Props) => {
  const { clickButton } = props;

  const [expData, setExpData] = useState({
    hiredY: "",
    firedY: "",
    occupation: "",
    companyName: "",
    aboutCompany: "",
    id: "",
  });

  console.log(expData, "expppp");

  const { data } = useContext(DataContext);

  const handlechange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setExpData({ ...expData, [name]: value });
  };

  useEffect(() => {
    setExpData({
      ...expData,
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
      const { data } = await axios.post(
        "https://freelance-gmjr.onrender.com/createWorkExp",
        expData
      );
      console.log(data, "great result for exp");
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
            placeholder=" hired year"
            name="hiredY"
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
            placeholder="fired year"
            name="firedY"
            onChange={(e) => handlechange(e)}
          />
        </div>

        <input
          type="text"
          className="bg-white border rounded-2xl p-3"
          placeholder="occupation"
          name="occupation"
          onChange={(e) => handlechange(e)}
        />
        <input
          type="text"
          className="bg-white border rounded-2xl p-3"
          placeholder="Enter your company name"
          name="companyName"
          onChange={(e) => handlechange(e)}
        />
        <input
          type="text"
          className="bg-white border rounded-2xl p-3"
          placeholder="Tell me about your company"
          name="aboutCompany"
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
