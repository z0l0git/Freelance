import React from "react";
import DottedButton from "../HoverButton/HoverButton";

export const HeaderText = () => {
  return (
    <div className="z-20 flex items-center w-screen text-white">
      <div className="w-[50%]">
        <p>Get Your Projects Done</p>
        <h1>Find the Best Freelancers for Your Needs</h1>
        <p>
          Join our community of dedicated businesses, entrepreneurs, and
          freelancers to find the perfect partner for your project.
        </p>
        <div className="flex gap-4">
          <DottedButton text={"Browse Jobs"} />
          <DottedButton text={"Find Freelancers"} />
        </div>
      </div>
      <div className="w-[50%] "></div>
    </div>
  );
};
