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

interface YourObjectType {
  _doc: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    discription: string;
    location: string;
    createdAt: string;
    image: string;
    jobTitle: string;
    budget: number;
    skills: SkillType[];
  };
  rating: number;
  howManyPeople: number;
}

type getDataType = {
  _id: string;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  auth: string;
  socials: [];
  skills: [];
  education: [];
  workExp: [];
  createdAt: string;
};
type PropsType = {
  profile: SetProDileype;
  data: Response;
  skill: SkillType[];
  userDataGet: getDataType | undefined;
  AllUser: YourObjectType[] | undefined;
};

export const MainProfileSidebar = (props: PropsType) => {
  const { profile, data, skill, userDataGet, AllUser } = props;
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.pathname = "/";
  };

  return (
    <div className="max-sm:w-[95%] flex flex-col gap-8 justify-center bg-transparent max-md:w-[70%] max-md:flex-col max-md:items-center w-4/12">
      <MainProfileInfo profile={profile} data={data} AllUser={AllUser} />
      <EditBar skill={skill} userDataGet={userDataGet} />
    </div>
  );
};
