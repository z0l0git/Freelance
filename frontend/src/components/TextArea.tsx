"use client";
import { Textarea } from "./ui/textarea";
import { Label } from "@/components/ui/label";

export const TextAreaComponent = (props: any) => {
  const { text } = props;
  return (
    <div>
      <Label htmlFor="message" className="Message">
        Message
      </Label>
      <Textarea className=" flex bg-slate-50 rounded-2xl" />
    </div>
  );
};
