"use client";
import { Textarea } from "./ui/textarea";
import { Label } from "@/components/ui/label";

export const TextAreaComponent = (props: any) => {
  const { text } = props;
  return (
    <div>
      <Label htmlFor="name" className="">{text}</Label>
      <Textarea className="bg-white" />
    </div>
  );
};
