"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Chilanka } from "next/font/google";
import React, { Children } from "react";

export const NameInputComponent = (props) => {
  const {
    name,
    placeholder,
    type,
    className = "",
    handleChange,
    name1,
    rest = "",
  } = props;
  return (
    <div className={className}>
      <Label htmlFor="name">{name}</Label>

      <Input
        // onBlur={onBlur}
        // value={value}
        type={type}
        id={name}
        name={name1}
        placeholder={placeholder}
        onChange={(el) => handleChange(el)}
        className="w-full outline-none"
      />
    </div>
  );
};
