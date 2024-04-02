import React from "react";
import Image from "next/image";
import { BlueButton, ButtonWithBlueBorder } from "@/components/Button";
import { NameInputComponent } from "@/components/Input";
import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons";
import { FaListOl, FaListUl } from "react-icons/fa";
import {
  MdOutlineUndo,
  MdOutlineRedo,
  MdOutlineAttachment,
} from "react-icons/md";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Textarea } from "@/components/ui/textarea";

const StepTwo = () => {
  return (
    <div className="flex gap-5 h-fit">
      <div className="flex flex-col border rounded-xl p-4 gap-4 w-[750px]">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold  text-[#212e48] text-[30px]">
            About the project
          </h1>
          <div className="border-b border-dashed w-full"></div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-bold text-[22px] text-[#212e48]">
            Give your project brief a title
          </p>
        </div>
        <p>
          Keep it short and simple - this will help us match you to the right
          category.
        </p>
        <div className=" bg-[#f8f9fc] rounded-xl"></div>
        <div className="flex gap-2">
          <BlueButton buttonName="Save & Continue" />
          <ButtonWithBlueBorder buttonName="Save & Continue" />
        </div>
        <NameInputComponent
          className=" text-black "
          placeholder="Inter Title"
        />
        <div className="flex flex-col gap-6">
          <p className="font-bold text-[22px] text-[#212e48]">
            Give your project brief a title
          </p>
        </div>
        <p>
          Keep it short and simple - this will help us match you to the right
          category.
        </p>
        <div className="border rounded-2xl">
          <div className="flex flex-col m-4">
            <div className="flex flex-col gap-4">
              <div className="flex">
                <ToggleGroup type="multiple" variant="outline">
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <FontBoldIcon className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <FontItalicIcon className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="strikethrough"
                    aria-label="Toggle strikethrough"
                  >
                    <UnderlineIcon className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <FaListOl className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <FaListUl className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <MdOutlineUndo className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <MdOutlineRedo className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <MdOutlineAttachment className="h-4 w-4" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div>
                <Textarea style={{ outline: "none" }} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <NameInputComponent />
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-bold text-[22px] text-[#212e48]">
            Attach Files (up to 1)
          </p>
        </div>
        <p>· Attach up to 5 files totaling a max of 5 GB</p>
        <p>input picture</p>
        <div className="flex items-center">
          <div className="border-b border-dashed w-full"></div>
          <div className="flex items-center justify-center w-[400px]">
            <p className="text-[10px]">ABOUT THE PROJECT</p>
          </div>

          <div className="border-b border-dashed w-full"></div>
        </div>
      </div>
      <div className="border rounded-xl h-[380px]">
        <div className="flex flex-col m-4  gap-5">
          <h1 className="font-bold  text-[#212e48] text-[30px]">
            Let's talk details
          </h1>
          <p>These suggestions are based on your brief’s title.</p>
          <Image src="/matching.png" width={400} height={400} alt="matching" />
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
{
  /* <Select>
  <SelectTrigger className="w-full outline-none border rounded-2xl p-3 flex items-end justify-end">
    <SelectValue placeholder="Text size" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup className="flex flex-col items-end justify-end">
      <SelectItem className="flex outline-none " value="14px">
        14px
      </SelectItem>
      <SelectItem className="flex outline-none " value="12px">
        12px
      </SelectItem>
      <SelectItem className="flex outline-none " value="10px">
        10px
      </SelectItem>
      <SelectItem className="flex outline-none" value="8px">
        8px
      </SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>; */
}
