import React from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import Image from "next/image";
import { AiFillWechat } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { CaretDownIcon } from "@radix-ui/react-icons";
const Skill = () => {
  return (
    <div className="bg-blue-200 px-[10px] w-fit text-blue-900 rounded-3xl font-semibold text-[18px]">
      developer
    </div>
  );
};

const Category = () => {
  return (
    <div>
      <span className="font-semibold text-[18px]">
        Natural Language Processing (NLP)
      </span>
      :
      <span>
        The chatbot should be equipped with NLP capabilities to understand and
        interpret user input.
      </span>
    </div>
  );
};

export default function ProjectDetail() {
  return (
    <div className="w-screen h-screen flex justify-center bg-slate-200">
      <div className="w-[1280px] mt-[100px] flex gap-[20px]">
        <div className="w-[850px] rounded-xl h-fit  bg-white p-[30px]">
          <div className="w-[100%] h-[200px] border border-slate-200 rounded-xl p-[20px]">
            <div className="text-[38px] mt-[10px] font-semibold border-b border-dashed border-slate-300 pb-[20px]">
              AI-powered Chatbot Development
            </div>
            <div className="mt-[20px] flex gap-[20px]">
              <div className="flex gap-[18px] border-r border-slate-400 w-fit pr-[18px] ">
                <div className="bg-blue-800 rounded-full w-fit h-fit p-[7px]">
                  <AiOutlineFieldTime className="text-[29px] text-white" />
                </div>
                <div>
                  <div>Delivery time</div>
                  <div>1-3 day</div>
                </div>
              </div>

              <div className="flex gap-[18px]  w-fit pr-[18px] ">
                <div className="bg-yellow-500 rounded-full w-fit h-fit p-[7px]">
                  <MdOutlineDeveloperMode className="text-[29px] text-white" />
                </div>
                <div>
                  <div>App development</div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[20px] border-b border-dashed border-slate-300 pb-[20px]">
            <div className="text-[35px] font-semibold">Description</div>
            <div className="mt-[17px]">
              The "AI-powered Chatbot Development" project focuses on building
              an intelligent chatbot that leverages artificial intelligence and
              natural language processing techniques to provide automated
              customer support and assistance.
            </div>
          </div>
          <div className="mt-[20px] border-b border-dashed border-slate-300 pb-[20px]">
            <div className="text-[35px] font-semibold">Skill requared</div>
            <div className="mt-[17px] flex flex-wrap">
              <Skill />
            </div>
          </div>
          <div className="mt-[20px]">
            <Category />
          </div>
        </div>
        <div className="w-[420px] h-fit  rounded-xl p-[20px] bg-white sticky top-0">
          <div className="border-b border-dashed border-slate-300 pb-[20px]">
            <div className="font-semibold text-[31px]">Budget</div>
            <div className="flex items-center mt-[20px] gap-[14px]">
              <GiTakeMyMoney className="text-[50px]" />
              <div className="flex items-center">
                from{" "}
                <span className="text-[40px] ml-[14px] font-semibold">
                  $333
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[20px]">
            <div className="border border-slate-300 rounded-full p-[10px] mt-[20px]">
              <div className="rounded-full overflow-hidden w-[100px] h-[100px]">
                <Image
                  alt=""
                  src="/itachi.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-[15px] w-[100%] border-b border-dashed border-slate-300 pb-[20px]">
              <div className="text-[27px] font-semibold">Binford Ltd</div>
              <div>Member since December 31, 2020</div>
              {/* <div className="p-[10px] w-[100%]"></div> */}
            </div>
            <div className="cursor-pointer w-[100%] ">
              <button className="flex justify-center group w-full h-full relative px-[31px] py-[15px] overflow-hidden rounded-[100px] bg-[#0d47a1] text-lg font-bold text-white md:h-[60%] lg:h-[40%] sm:h-[20%]">
                <div className="absolute inset-0 h-full z-0 w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:text-transparent group-hover:bg-white/40"></div>
                <div className="flex gap-[8px]">
                  Chat <AiFillWechat />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
