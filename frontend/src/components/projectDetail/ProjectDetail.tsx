"use client";
import React, { useContext } from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import Image from "next/image";
import { AiFillWechat } from "react-icons/ai";
import { PiClockCountdownLight } from "react-icons/pi";
import { BsTags } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { BiSolidCategory } from "react-icons/bi";
import { useRouter } from "next/navigation";
import axios from "axios";
import { DataContext } from "../context/DataContext";
import { io } from "socket.io-client";

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
  name?: string;
  description: string;
};

type PosdtDataType = {
  _id: string;
  createdBy: {
    _id: string;
    firstName?: string;
    lastName?: string;
    image?: string;
    createdAt: string;
  };
  title?: string;
  description?: string;
  budget?: number;
  deliveryTime?: string;
  flexible?: boolean;
  category: CtType[];
  skills?: SkillType[];
  createdAt: string;
};
type PropsType = {
  data?: PosdtDataType;
};

type ConversationType = {
  _id: string;
  roomId: string;
  messages: string[];
  participants: [string];
};

export default function ProjectDetail(props: PropsType) {
  const { data } = props;
  const { data: userData } = useContext(DataContext);

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

  const UserName = `${data?.createdBy.firstName} ${data?.createdBy.lastName}`;

  const Budget = `${data?.budget?.toLocaleString()}`;
  const title = `${data?.title}`;
  const deliveryTime = `${data?.deliveryTime}`;
  const createdAtDate = `${data?.createdBy?.createdAt.split("T")[0]}`;
  const CreatedAt = formatDate(createdAtDate);
  const formatcreatedDate = `${data?.createdAt.split("T")[0]}`;
  const FormatedDate = formatDate(formatcreatedDate);

  const Description = `${data?.description}`;
  const { push } = useRouter();

  const URL = process.env.NEXT_PUBLIC_BACKEND;

  var socket: any;
  socket = io(URL || "https://freelance-gmjr.onrender.com", {
    transports: ["websocket"],
  });

  const handleChat = async () => {
    const conversation = await axios.post<ConversationType>(
      "https://freelance-gmjr.onrender.com/createConvo",
      {
        participants: [data?.createdBy?._id, userData._id],
      }
    );
    console.log(conversation.data);

    socket.emit("join_room", conversation.data.roomId);
    push(`/chat?roomId=${conversation?.data.roomId}`);
  };

  return (
    <div className="w-screen h-screen flex justify-center bg-slate-200">
      <div className="w-[1280px] mt-[100px] flex gap-[20px]">
        <div className="w-[850px] rounded-xl h-fit  bg-white p-[30px]">
          <div className="w-[100%] h-fit border border-slate-200 rounded-xl p-[20px]">
            <div className="text-[38px] mt-[10px] font-semibold border-b border-dashed border-slate-300 pb-[20px]">
              {title}
            </div>
            <div className="mt-[20px] flex gap-[20px] justify-between items-center">
              <div className="flex gap-[18px]  w-fit pr-[18px] ">
                <div className="bg-blue-800 rounded-full w-fit h-fit p-[7px]">
                  <AiOutlineFieldTime className="text-[29px] text-white" />
                </div>
                <div>
                  <div className="font-bold text-sm">Delivery time</div>
                  <div className="text-[17px]">{deliveryTime}</div>
                </div>
              </div>
              <GoDotFill />
              <div className="flex gap-[18px] items-center  w-fit pr-[18px] ">
                <div className="bg-yellow-500 rounded-full w-fit h-fit p-[7px]">
                  <BiSolidCategory className="text-[29px] text-white" />
                </div>
                <div>
                  <div className="font-bold text-sm">Category</div>
                  <div>{data?.category[0].name}</div>
                </div>
              </div>
              <GoDotFill />

              <div className="flex gap-[18px]  w-fit pr-[18px] ">
                <div className="bg-blue-800 rounded-full w-fit h-fit p-[7px]">
                  <PiClockCountdownLight className="text-[29px] text-white" />
                </div>
                <div>
                  <div className="font-bold text-sm">Created at</div>
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
            <div className="text-[35px] font-semibold">Skills required</div>
            <div className="mt-[17px] flex flex-wrap gap-4">
              {data?.skills?.map((el, index) => (
                <Skill skil={el.name} key={index} />
              ))}
            </div>
          </div>
          <div className="mt-[20px]">
            {data?.category?.map((el, index) => (
              <Category
                key={index}
                text1={el.name ? el.name : "No category"}
                text2={el.description}
              />
            ))}
          </div>
        </div>
        <div className="w-[420px] h-fit  rounded-xl p-[20px] bg-white sticky top-[80px]">
          <div className="border-b border-dashed border-slate-300 pb-[20px]">
            <div className="font-semibold text-[31px]">Budget</div>
            <div className="flex items-center mt-[20px] gap-[14px]">
              <BsTags className="text-[50px]" />
              <div className="flex items-center">
                from
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
                  src={`${
                    data?.createdBy?.image
                      ? data?.createdBy?.image
                      : "/proq.webp"
                  }`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-[15px] w-[100%] border-b border-dashed border-slate-300 pb-[20px]">
              <div className="text-[27px] font-semibold">{UserName}</div>
              <div>
                Member since{" "}
                <span className="text-[20px] font-semibold">{CreatedAt}</span>
              </div>
              {/* <div className="p-[10px] w-[100%]"></div> */}
            </div>
            <div onClick={handleChat} className="cursor-pointer w-[100%] ">
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
