"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { MouseEvent } from "react";
import CheckCategory from "./CheckCategory";
import { useState } from "react";
import { ChangeEvent } from "react";
import { Skills } from "@/components/Profile/Skils";

type DataType = {
  name: string;
  description: string;
  _id: string;
};
type SkillType = {
  name: string;
  id: string;
};
type PosdtDataType = {
  createdBy: string;
  title: string;
  description: string;
  budget: number;
  deliveryTime: string;
  flexible: boolean;
  categorys: DataType[];
  skillss: string[];
};

type CateType = {
  dataProjectCategory: DataType[];
  skillCategory: SkillType[];
  setPostData: React.Dispatch<React.SetStateAction<PosdtDataType>>;
  postData: PosdtDataType;
};

const StepTwo = (props: CateType) => {
  const { dataProjectCategory, skillCategory, setPostData, postData } = props;

  const handleSkillClick = (event: MouseEvent<HTMLDivElement>) => {
    const categoryId = event.currentTarget.id;

    const filteredSkillCategpry = skillCategory?.find(
      ({ id }) => id === categoryId
    );
    console.log(filteredSkillCategpry, "filteredSkillCategpry");

    const filtered = postData?.skillss.find(
      (el) => el === filteredSkillCategpry?.name
    );

    if (filtered) {
      console.log("you have already picked up ");

      setPostData((prev) => ({
        ...prev,
        skillss: prev.skillss.filter(
          (el) => el !== filteredSkillCategpry?.name
        ),
      }));
    } else {
      filteredSkillCategpry &&
        setPostData((prev) => ({
          ...prev,
          skillss: [...prev.skillss, filteredSkillCategpry.name],
        }));
    }
  };

  const handleClickCategories = (event: MouseEvent<HTMLDivElement>) => {
    const skillId = event.currentTarget.id;

    const filteredCategpry = dataProjectCategory?.find(
      ({ _id }) => _id === skillId
    );
    console.log(filteredCategpry, "clicked one");

    const filteredCa = postData?.categorys.find(
      (el) => el._id === filteredCategpry?._id
    );

    if (filteredCa) {
      console.log("you have already picked up");
    } else {
      filteredCategpry &&
        setPostData((prev) => ({
          ...prev,
          categorys: [...prev.categorys, filteredCategpry],
        }));
    }
  };
  // setPostData((prev) => ({
  //   ...prev,
  //   categorys: prev.categorys.filter(
  //     (el: DataType) => el._id !== filteredCa?._id
  //   ),
  // }));

  return (
    <div className="flex gap-5">
      <div className="flex flex-col justify-center gap-5">
        <div className="flex flex-col border rounded-xl p-4 gap-4 w-[750px]">
          <div className="flex flex-col gap-6">
            <h1 className="font-bold  text-[#212e48] text-[22px]">
              Your Preferences
            </h1>
            <div className="border-b border-dashed w-full"></div>
          </div>
          <div>
            <div className="flex flex-col gap-6">
              <p className="font-bold  text-[#212e48] text-[22px]">
                Which skill best fits your project?
              </p>
              <div className="flex items-center">
                <div className="border-b border-dashed w-full"></div>
                <div className="flex items-center justify-center w-[400px]">
                  <p className="text-[10px]">CHOOSE ANY SKILLS</p>
                </div>

                <div className="border-b border-dashed w-full"></div>
              </div>
            </div>
            <div className="w-[100%] flex flex-wrap gap-5 my-[30px]">
              {skillCategory?.map((el, index) => (
                <div
                  key={index}
                  id={el.id}
                  onClick={handleSkillClick}
                  className="bg-[#f8f9fc] px-[10px] py-[5px] w-fit rounded-xl font-bold  text-[#404a60] text-[18px]"
                >
                  {el.name}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="font-bold  text-[#212e48] text-[22px]">
              Which category best fits your project?
            </p>
            <div className="flex items-center">
              <div className="border-b border-dashed w-full"></div>
              <div className="flex items-center justify-center w-[400px]">
                <p className="text-[10px]">CHOOSE ANY CATEGORIES</p>
              </div>

              <div className="border-b border-dashed w-full"></div>
            </div>
          </div>
          <p>These suggestions are based on your brief&apos;s title.</p>
          <div className=" bg-[#f8f9fc] rounded-xl">
            {dataProjectCategory?.map((el, index) => (
              <div key={index} onClick={handleClickCategories} id={el._id}>
                <CheckCategory name={el.name} text={el.description} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border rounded-xl w-[434px] h-[380px]">
        <div className="flex flex-col m-4  gap-5">
          <h1 className="font-bold  text-[#212e48] text-[22px]">
            Let&apos;s talk details
          </h1>
          <p>Tell us a bit more about what you&apos;re looking for.</p>
          <Image src="/matching.png" width={400} height={400} alt="matching" />
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
