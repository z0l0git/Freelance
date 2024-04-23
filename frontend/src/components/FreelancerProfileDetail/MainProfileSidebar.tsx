"use client";
import React from "react";
import { MainProfileInfo } from "./MainProfileInfo";
import { EditBar } from "./AllEditbar";

type SetProDileype = {
  firstName: string;
  lastName: string;
  id: string;
  phone: string;
  location: string;
  createdAt: string;
  image: string;
};
type Response = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  discription: string;
  location: string;
  image: string;
  jobTitle: string;
  budget: number;
};

type SkillType = {
  name: string;
  id: string;
};

type PropsType = {
  profile: SetProDileype;
  data: Response;
  skill: SkillType[];
};

export const MainProfileSidebar = (props: PropsType) => {
  const { profile, data, skill } = props;

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.pathname = "/";
  };

  return (
    <div className=" w-4/12 flex flex-col gap-8 justify-center bg-transparent max-md:w-[70%] max-md:flex-col max-md:items-center ">
      <MainProfileInfo profile={profile} data={data} />
      <EditBar skill={skill} />
    </div>
  );
};
