"use client";
import React from "react";
import { MainProfileInfo } from "./MainProfileInfo";
import { EditBar } from "./AllEditbar";

export const MainProfileSidebar = () => {

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.pathname = "/";
  };

  return (
    <div className="flex flex-col gap-8  justify-center bg-transparent max-md:w-full">
      <MainProfileInfo />
      <EditBar />
    </div>
  );
};
