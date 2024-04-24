"use client";
import { WhiteButton } from "../Button";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import axios from "axios";
import { IoCloseCircleSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

interface MyBioValues {
  discription: string;
}

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
      notifySuccess();

      console.log(data, "jobtdata");
    } catch (err: any) {
      console.log(err.message);
      notifyError();
    }
  };

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const initialValues: MyBioValues = { discription: "" };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="skillTitle">Job Title</h3>
        {!showdescriptionEdit ? (
          <WhiteButton
            buttonClass="skillEditButton"
            onClick={clickButton}
            buttonName="Edit"
          />
        ) : (
          <IoCloseCircleSharp onClick={clickButton} className="skillCancel" />
        )}
      </div>
      <div
        className={
          !showdescriptionEdit ? "skillEditBoxNormal" : "skillEditBoxEditMode "
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
          className={!showdescriptionEdit ? "skillTextShow" : "skillTextEdit"}
        />
        {showdescriptionEdit ? (
          <div className="w-full flex justify-around p-4">
            <button onClick={UpJobTitle} className="skillUpdateButton">
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
