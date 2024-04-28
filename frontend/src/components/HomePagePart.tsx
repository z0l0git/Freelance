import Image from "next/image";
import { DiVim } from "react-icons/di";
import { LuNewspaper } from "react-icons/lu";
import { GrUserManager } from "react-icons/gr";
import { FaListCheck } from "react-icons/fa6";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const MapData = [
  {
    icon: <LuNewspaper size={30} />,
    title: "Post a Job",
    text: "Create your free job posting and start receiving Quotes within hours.",
  },
  {
    icon: <GrUserManager size={30} />,
    title: "Hire Freelancers",
    text: "Create your free job posting and start receiving Quotes within hours.",
  },
  {
    icon: <FaListCheck size={30} />,
    title: "Get Work Done",
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

  useEffect(() => {
    const sds = document.querySelectorAll(".dood");
    sds.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          duration: 3,
          x: -100,
          opacity: 0,
          ease: "ease-in",
        },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            id: `section${index + 1} `,
            trigger: el,
            start: "top 85%", // Start line
            end: "bottom 0%", // End line
            // markers: true,
            toggleActions: "play none nones reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="w-[402px] h-[78px] md:w-[636px] md:h-[60px] flex items-center justify-between ">
      <div className="flex items-center justify-center bg-[#F3F6FA]  rounded-full text-[#0D47A1] cursor-pointer hover:bg-[#2196F3]  hover:text-white ">
        {icon}
      </div>
      <div className="w-[318px] h-[78px] md:w-[552px] md:h-[60px] flex flex-col justify-center">
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
};

export const HomePagePart = () => {
  return (
    <div className="w-screen flex items-center justify-center">
      <div className="flex flex-col-reverse w-[426px] h-fit py-5 md:flex-row md:w-[1320px] md:h-[627px] items-center justify-between ">
        <div className="w-[402px] h-[460px] md:w-[526px] md:h-[603px]">
          <Image alt="" src={"/HomePic.jpg"} width={526} height={603} />
        </div>

        <div className="w-[402px] h-fit md:w-[636px] md:h-[567px] flex flex-col items-center justify-around ">
          <div className="w-[402px] md:w-full h-fit ">
            <strong className="dood text-[18px] md:text-[24px] text-[#0D47A1]">
              How It Works
            </strong>
            <p className="dood text-[24px] md:text-[40px] font-semibold">
              Get Projects Done in Less Time with Our Process
            </p>
            <p className="dood">
              Our working process is designed to simplify complex tasks,
              optimize operations, and maximize productivity. From initial
              planning and ideation to execution
            </p>
          </div>
          <div className="dood w-full md:w-full h-[336px] flex flex-col justify-around">
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
