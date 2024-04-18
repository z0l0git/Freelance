"use client";
import { Formik, Form, ErrorMessage, Field, useFormik } from "formik";
import { BlueButton, ButtonWithBlueBorder, WhiteButton } from "../Button";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import axios from "axios";
import { IoCloseCircleSharp } from "react-icons/io5";

type descriptionType = {
  discription: string;
};
type DispType = {
  setStage: React.Dispatch<React.SetStateAction<string>>;
};
interface MyBioValues {
  discription: string;
}
type Response = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
};

export const DescriptionEditComp: React.FC<{}> = () => {
  const { data } = useContext(DataContext);
  // console.log(data, "data");

  const [showdescriptionEdit, setShowDescriptionEdit] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  console.log(jobTitle, "jobTitle");

  useEffect(() => {
    setJobTitle(data?.jobTitle);
  }, [data]);

  const clickButton = () => {
    setShowDescriptionEdit(!showdescriptionEdit);
  };
  const UpJobTitle = async () => {
    try {
      const { data: JobUp } = await axios.post(
        "https://freelance-gmjr.onrender.com/jobTitleUp",
        {
          id: data?._id,
          jobTitle: jobTitle,
        }
      );
      console.log(JobUp, "JobUp");
      setShowDescriptionEdit(!showdescriptionEdit);

      console.log(data, "jobtdata");
    } catch (err: any) {
      console.log(err.message);
    }
  };

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const initialValues: MyBioValues = { discription: "" };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-2xl font-semibold">Job Title</h3>
        {!showdescriptionEdit ? (
          <WhiteButton
            buttonClass="font-bold text-[#0d47a1] cursor-pointer"
            onClick={clickButton}
            buttonName="Edit"
          />
        ) : (
          <IoCloseCircleSharp onClick={clickButton} className="w-6 h-6" />
        )}
      </div>
      <div
        className={
          !showdescriptionEdit
            ? "w-full rounded-xl p-2 overflow-hidden"
            : "bg-gray-100 rounded-xl p-4 "
        }
      >
        <input
          name="jobTitle"
          placeholder="your job title"
          type="text"
          value={jobTitle}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setJobTitle(e.target.value)
          }
          disabled={!showdescriptionEdit ? true : false}
          className={
            !showdescriptionEdit
              ? "w-full h-fit p-1 bg-transparent text-justify text-gray-700 "
              : "w-full bg-transparent text-black mb-8 pb-8 border-b-2  "
          }
        />
        {showdescriptionEdit ? (
          <div className="w-full flex justify-around p-4">
            <button
              onClick={UpJobTitle}
              className="px-[10px] py-[5px] bg-blue-800 rounded-lg text-white font-bold"
            >
              Update
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* <Basic /> */}
    </div>
  );
};
