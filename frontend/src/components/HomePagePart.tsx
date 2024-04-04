import Image from "next/image";
import { DiVim } from "react-icons/di";
import { LuNewspaper } from "react-icons/lu";

const MapData = [
  {
    icon: <LuNewspaper />,
    title: "Post a Job",
    text: "Create your free job posting and start receiving Quotes within hours.",
  },
  {
    icon: <LuNewspaper />,
    title: "Post a Job",
    text: "Create your free job posting and start receiving Quotes within hours.",
  },
  {
    icon: <LuNewspaper />,
    title: "Post a Job",
    text: "Create your free job posting and start receiving Quotes within hours.",
  },
  {
    icon: <LuNewspaper />,
    title: "Post a Job",
    text: "Create your free job posting and start receiving Quotes within hours.",
  },
];

type SelecType = {
  icon: any;
  title: string;
  text: string;
};

export const SelectMap = (props: SelecType) => {
  const { icon, title, text } = props;
  return (
    <div className="w-[402px] h-[78px] md:w-[636px] md:h-[60px] flex items-center justify-between  ">
      <div className="w-[60px] h-[60px] flex items-center justify-center bg-[#F3F6FA]  rounded-full text-[#0D47A1] cursor-pointer hover:bg-[#2196F3]  hover:text-white ">
        {icon}
      </div>
      <div className="w-[318px] h-[78px] md:w-[552px] md:h-[60px] flex flex-col ">
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
};

export const HomePagePart = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col-reverse w-[426px] h-fit py-5 md:flex-row md:w-[1320px] md:h-[627px] items-center justify-between ">
        <div className="w-[402px] h-[460px] md:w-[526px] md:h-[603px]">
          <Image alt="" src={"/HomePic.png"} width={526} height={603} />
        </div>

        <div className="w-[402px] h-fit md:w-[636px] md:h-[567px] flex flex-col items-center justify-around ">
          <div className="w-[402px] md:w-full h-fit ">
            <strong className="text-[18px] md:text-[24px] text-[#0D47A1]">
              How It&apos;s Works
            </strong>
            <p className="text-[24px] md:text-[40px] font-semibold">
              Get Proficient in Less Time with Our Process
            </p>
            <p>
              Our working process is designed to simplify complex tasks,
              optimize operations, and maximize productivity. From initial
              planning and ideation to execution
            </p>
          </div>
          <div className="w-full md:w-full h-[336px] flex flex-col justify-around">
            {MapData.map((el, index) => {
              return (
                <SelectMap
                  key={index}
                  icon={el.icon}
                  title={el.title}
                  text={el.text}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};