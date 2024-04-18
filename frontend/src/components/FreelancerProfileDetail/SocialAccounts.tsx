"use client";
import React from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { WhiteButton } from "../Button";
export const SocialAccounts = () => {
  const socialArray = [
    { logo: "facebook" },
    { logo: "instagram" },
    { logo: "linkedin" },
  ];
  return (
    <div>
      <h3 className="text-2xl font-semibold xl:text-xl">Social Accounts</h3>
      <div className="flex gap-4">
        {socialArray.map((el, index) => (
          <WhiteButton key={index} buttonClass="" buttonName={el.logo} />
        ))}
      </div>
    </div>
  );
};
