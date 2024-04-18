"use client";
import React from "react";
import { MainProfileInfo } from "./MainProfileInfo";
import { EditBar } from "./AllEditbar";
import { BlueButton } from "../Button";



type SetProDileype = {
  firstName: string;
  lastName: string;

  phone: string;
  location: string;
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
};

type PropsType = {
  profile: SetProDileype;
  data: Response;
};
export const MainProfileSidebar = (props: PropsType) => {
  const { profile, data } = props;
  console.log(profile, "pro");
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.pathname = "/";
  };

  return (
    <div className="">
      <div className="flex flex-col gap-8 max-w-xl border mx-auto">
        <MainProfileInfo />
        <EditBar />
        <BlueButton
          buttonName="Log Out"
          width="40%"
          height="10%"
          handleSubmit={handleLogout}
        />
      </div>
    </div>
  );
};
