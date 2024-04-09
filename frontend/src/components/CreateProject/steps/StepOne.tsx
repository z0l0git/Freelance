import React from "react";
import Image from "next/image";
import { NameInputComponent } from "@/components/Input";
import { AiOutlinePicture } from "react-icons/ai";
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
const StepOne = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-5 h-fit">
      <div className="flex flex-col border rounded-xl p-4 gap-4 w-fit md:w-[750px]">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold  text-[#212e48] text-[22px]">
            About the project
          </h1>
          <div className="border-b border-dashed w-full"></div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-bold text-[18px] text-[#212e48]">
            Give your project brief a title
          </p>
        </div>
        <p>
          Keep it short and simple - this will help us match you to the right
          category.
        </p>
        <div className=" bg-[#f8f9fc] rounded-xl"></div>
        <NameInputComponent
          className=" text-black "
          placeholder="Inter Title"
        />
        <div className="flex flex-col gap-6">
          <p className="font-bold text-[18px] text-[#212e48]">
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
                  <ToggleGroupItem value="list" aria-label="Toggle list">
                    <FaListUl className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="undo" aria-label="Toggle undo">
                    <MdOutlineUndo className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="redo" aria-label="Toggle redo">
                    <MdOutlineRedo className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="attachment"
                    aria-label="Toggle attachment"
                  >
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
          <p className="font-bold text-[18px] text-[#212e48]">
            Attach Files (up to 1)
          </p>
        </div>
        <div className="flex flex-col w-[300px] h-[200px] rounded-3xl bg-[#f8f9fc] items-center justify-center">
          <AiOutlinePicture className="w-[100px]" />
          <p>Drag and drop </p>
          <input type="file" id="file-input" />
        </div>

        <div id="file-input"></div>

        <div className="flex items-center ">
          <div className="border-b border-dashed w-full"></div>
          <div className="flex items-center justify-center w-[400px]">
            <p className="text-[10px]">ABOUT THE PROJECT</p>
          </div>
          <div className="border-b border-dashed w-full"></div>
        </div>
      </div>
      <div className="border rounded-xl w-[fit] md:w-[434px] h-[380px]">
        <div className="flex flex-col m-4  gap-5">
          <h1 className="font-bold  text-[#212e48] text-[22px]">
            Let the matching begin...
          </h1>
          <p>This is where you fill us in on the big picture.</p>
          <Image src="/matching.png" width={400} height={400} alt="matching" />
        </div>
      </div>
    </div>
  );
};

export default StepOne;
