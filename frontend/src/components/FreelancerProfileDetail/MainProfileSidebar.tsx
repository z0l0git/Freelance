"use client";
import React from "react";
import { MainProfileInfo } from "./MainProfileInfo";
import { EditBar } from "./AllEditbar";

export const MainProfileSidebar = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-8 max-w-xl border mx-auto">
        <MainProfileInfo />
        <EditBar />
      </div>
    </div>
  );
};
