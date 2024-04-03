"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export const NameInputComponent = (props) => {
  const { name, placeholder, type, className = "" } = props;
  return (
    <div className={className}>
      <Label htmlFor="name">{name}</Label>
      <Input type={type} id={name} placeholder={placeholder} />
    </div>
  );
};
