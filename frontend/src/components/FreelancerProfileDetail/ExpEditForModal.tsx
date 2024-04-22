import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import axios from "axios";
import { ChangeEvent } from "react";

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
type ExpType = {
  aboutCompany: string;
  companyName: string;
  firedY: string;
  hiredY: string;
  occupation: string;
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
  workExp: ExpType[];
  createdAt: string;
};

type PropsType = {
  founded: ExpType | undefined;
  setGetUserData: React.Dispatch<React.SetStateAction<getDataType | undefined>>;
  getUserState: getDataType | undefined;
  handleCloseEdit: () => void;
};

export default function ExpEditForModal(props: PropsType) {
  const { founded, setGetUserData, getUserState, handleCloseEdit } = props;
  console.log(founded, "founded");

  type Typee = {
    id: any;
    _id: string;
    hiredY: string;
    firedY: string;
    occupation: string;
    companyName: string;
    aboutCompany: string;
  };

  const [temp, setTemp] = useState<Typee | any>({});
  console.log(temp, "tempee");

  useEffect(() => {
    if (founded) {
      setTemp(founded);
    }
  }, [founded]);

  const handlechange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTemp({ ...temp, [name]: value });
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
  const handleUp = async () => {
    // setTemp({ ...temp, id: founded?._id });
    try {
      const { data } = await axios.post(
        "http://localhost:8000/updateWorkExp",
        temp
      );
      console.log(data, "uped daaa");

      handleCloseEdit();
      const updatedEducation = getUserState?.workExp.map((item) =>
        item._id === temp._id ? temp : item
      );

      setGetUserData((prev: any) => ({
        ...prev,
        workExp: updatedEducation,
      }));
      notifySuccess();
    } catch (err: any) {
      notifyError();
      console.log(err.message);
    }
  };

  return (
    <div className="w-[400px] bg-white rounded-xl ">
      <div className="flex  bg-gray-100 w-full rounded-xl h-fit">
        <div className="w-full h-fit flex flex-col p-5 gap-4">
          <div className="flex justify-between items-center ">
            <input
              type="number"
              className="bg-white border rounded-2xl p-3 w-[45%]"
              placeholder="hired year"
              name="hiredY"
              value={temp?.hiredY}
              onChange={(e) => handlechange(e)}
            />
            <div className="text-slate-400">to</div>

            <input
              type="number"
              className="bg-white border rounded-2xl p-3 w-[45%]"
              placeholder="fired  year"
              name="firedY"
              value={temp?.firedY}
              onChange={(e) => handlechange(e)}
            />
          </div>
          <input
            type="text"
            className="bg-white border rounded-2xl p-3"
            placeholder="Enter your school name"
            name="companyName"
            value={temp?.companyName}
            onChange={(e) => handlechange(e)}
          />
          {/* <input
            type="text"
            className="bg-white border rounded-2xl p-3"
            placeholder="Enter your degree"
            name="degree"
            value={temp?.degree}
            onChange={(e) => handlechange(e)}
          /> */}

          <input
            type="text"
            className="bg-white border rounded-2xl p-3"
            placeholder="profession"
            name="occupation"
            value={temp?.occupation}
            onChange={(e) => handlechange(e)}
          />

          <input
            type="text"
            className="bg-white border rounded-2xl p-3"
            placeholder="Tell me about your company"
            name="aboutCompany"
            value={temp?.aboutCompany}
            onChange={(e) => handlechange(e)}
          />
          <div className="w-full flex justify-around p-4">
            <button
              onClick={handleUp}
              className="px-[10px] py-[5px] bg-blue-800 rounded-lg text-white font-bold"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
