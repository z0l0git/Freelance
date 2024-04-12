"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export const NameInputComponent = (props) => {
  const {
    name,
    placeholder,
    type,
    className = "",
    handleChange,
    name1,
  } = props;
  return (
    <div className={className}>
      <Label htmlFor="name">{name}</Label>
      <Input
        type={type}
        id={name}
        name={name1}
        placeholder={placeholder}
        onChange={(el) => handleChange(el)}
        className="w-full"
      />
    </div>
  );
};
