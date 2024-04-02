import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SelectBox = () => {
  return (
    <Select>
      <SelectTrigger className="w-[108px] h-full bg-[#0D47A9] rounded-[100px] text-white font-bold items-center justify-center border-none">
        <SelectValue placeholder="Talent" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="talent">Talent</SelectItem>
          <SelectItem value="job">Job</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
