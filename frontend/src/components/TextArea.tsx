"use client";
import React from "react";
import { Textarea } from "./ui/textarea";
import { Label } from "../components/ui/label";

export const TextAreaComponent = (props: any) => {
  const { text } = props;
  return (
    <div>
      <Label htmlFor="message" className="">
        Message
      </Label>
      <Textarea className="bg-white" />
    </div>
  );
};
