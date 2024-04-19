"use client";
import { Formik, FormikProps, ErrorMessageProps } from "formik";
import { BlueButton, ButtonWithBlueBorder, WhiteButton } from "../Button";
import { ChangeEvent, ReactEventHandler, useEffect } from "react";
import { string } from "yup";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import axios from "axios";
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

  const AddnewEducation = async () => {
    try {
      const { data } = await axios.post(
        "https://freelance-gmjr.onrender.com/createWorkExp",
        expData
      );
      console.log(data, "great result for exp");
      clickButton();
    } catch (err: any) {
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
          <button
            onClick={AddnewEducation}
            className="px-[10px] py-[5px] bg-blue-800 rounded-lg text-white font-bold"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
