"use client";
import React from "react";
import { MainProfileInfo } from "./MainProfileInfo";
import { EditBar } from "./AllEditbar";
import { BlueButton } from "../Button";

export const MainProfileSidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem("Token");
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
