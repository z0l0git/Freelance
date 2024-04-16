import React from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import Image from "next/image";
import { AiFillWechat } from "react-icons/ai";
import { PiClockCountdownLight } from "react-icons/pi";
import { BsCheck2Circle } from "react-icons/bs";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { DataArrayTexture } from "three";

type SkillPropType = {
  skil: string;
};
const Skill = (porps: SkillPropType) => {
  const { skil } = porps;

  return (
    <div className="bg-blue-200 px-[10px] w-fit text-blue-900 rounded-3xl font-semibold text-[18px]">
      {skil}
    </div>
  );
};

type CateTypess = {
  text1: string;
  text2: string;
};

const Category = (props: CateTypess) => {
  const { text1, text2 } = props;
  return (
    <div>
      <span className="font-semibold text-[18px]">{text1}</span>:
      <span className="ml-[5px]">{text2}</span>
    </div>
  );
};

type SkillType = {
  name: string;
  id: string;
};
type CtType = {
  _id: string;
  name: string;
  description: string;
};

type PosdtDataType = {
  _id: string;
  createdBy: {
    firstName: string;
    lastName: string;
  };
  title: string;
  description: string;
  budget: number;
  deliveryTime: string;
  flexible: boolean;
  category: CtType[];
  skills: SkillType[];
  createdAt: string;
};
type PropsType = {
  data: PosdtDataType;
};

export default function ProjectDetail(props: PropsType) {
  const { data } = props;
  console.log(data, "data");

  function formatDate(originalDate: string): string {
    const [yearStr, monthStr, dayStr] = originalDate.split("-");
    const year = parseInt(yearStr);
    const month = parseInt(monthStr);
    const day = parseInt(dayStr);
    const date = new Date(year, month - 1, day);

    const months: string[] = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthName: string = months[date.getMonth()];
    const formattedDate: string = `${monthName} ${day}, ${year}`;
    return formattedDate;
  }

  const FormatedDate = formatDate(data?.createdAt.split("T")[0]);
  const UserName = `${data?.createdBy.firstName} ${data?.createdBy.lastName}`;
  const Budget = `${data?.budget}`;
  const title = `${data?.title}`;
  const deliveryTime = `${data?.deliveryTime}`;
  const Flexible = `${data?.flexible}`;
  const Categorys = `${data?.category}`;

  const CreatedAt = `${data?.createdAt}`;
  const Description = `${data?.description}`;
  console.log(data?.category, "scategorieslls");

  return (
    <div className="w-screen h-screen flex justify-center bg-slate-200">
      <div className="w-[1280px] mt-[100px] flex gap-[20px]">
        <div className="w-[850px] rounded-xl h-fit  bg-white p-[30px]">
          <div className="w-[100%] h-fit border border-slate-200 rounded-xl p-[20px]">
            <div className="text-[38px] mt-[10px] font-semibold border-b border-dashed border-slate-300 pb-[20px]">
              {title}
            </div>
            <div className="mt-[20px] flex gap-[20px]">
              <div className="flex gap-[18px] border-r border-slate-400 w-fit pr-[18px] ">
                <div className="bg-blue-800 rounded-full w-fit h-fit p-[7px]">
                  <AiOutlineFieldTime className="text-[29px] text-white" />
                </div>
                <div>
                  <div>Delivery time</div>
                  <div>{deliveryTime}</div>
                </div>
              </div>

              <div className="flex gap-[18px]  border-r border-slate-400 w-fit pr-[18px] ">
                <div className="bg-yellow-500 rounded-full w-fit h-fit p-[7px]">
                  <MdOutlineDeveloperMode className="text-[29px] text-white" />
                </div>
                <div>
                  <div>App development</div>
                  <div></div>
                </div>
              </div>

              <div className="flex gap-[18px]  w-fit pr-[18px] ">
                <div className="bg-blue-800 rounded-full w-fit h-fit p-[7px]">
                  <PiClockCountdownLight className="text-[29px] text-white" />
                </div>
                <div>
                  <div>Created at</div>
                  <div>{FormatedDate}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[20px] border-b border-dashed border-slate-300 pb-[20px]">
            <div className="text-[35px] font-semibold">Description</div>
            <div className="mt-[17px]">{Description}</div>
          </div>
          <div className="mt-[20px] border-b border-dashed border-slate-300 pb-[20px]">
            <div className="text-[35px] font-semibold">Skill requared</div>
            <div className="mt-[17px] flex flex-wrap gap-4">
              {data?.skills?.map((el, index) => (
                <Skill skil={el.name} key={index} />
              ))}
            </div>
          </div>
          <div className="mt-[20px]">
            {data?.category?.map((el, index) => (
              <Category key={index} text1={el.name} text2={el.description} />
            ))}
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
                  {Budget}₮
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
              <div className="text-[27px] font-semibold">{UserName}</div>
              {/* <div>
                Member since{" "}
                <span className="text-[20px] font-semibold">
                  {FormatedDate}
                </span>
              </div> */}
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
