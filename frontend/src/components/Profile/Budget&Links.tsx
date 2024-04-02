import { BsTags } from "react-icons/bs";
import { CiCircleInfo } from "react-icons/ci";
import { CheckBoxMap } from "./ProfileMaps";
import { LinkMap } from "./ProfileMaps";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { GoPlus } from "react-icons/go";

const LinkData = [
  {
    linkIcon: <FaFacebook width={16} height={16} className="text-[#0D47A1]" />,
  },
  {
    linkIcon: <FaInstagram width={16} height={16} className="text-[#0D47A1]" />,
  },
  {
    linkIcon: <FaTwitter width={16} height={16} className="text-[#0D47A1]" />,
  },
  {
    linkIcon: <FaPinterest width={16} height={16} className="text-[#0D47A1]" />,
  },
  {
    linkIcon: <FaLinkedin width={16} height={16} className="text-[#0D47A1]" />,
  },
  {
    linkIcon: <FaGithub width={16} height={16} className="text-[#0D47A1]" />,
  },
  {
    linkIcon: <GoPlus width={16} height={16} className="text-[#0D47A1]" />,
  },
];

const CheckBoxData = [
  {
    text: "Prompt writing",
  },
  {
    text: "Generated image examples",
  },
  {
    text: "Unlimited Revisions",
  },
  {
    text: "Image upscaling",
  },
];

export const BadgetAndLinks = () => {
  return (
    <div className="hidden md:w-full md:h-fit md:flex md:flex-col md:items-center md:justify-around md:gap-[20px]">
      <div className="w-[380px] h-fit flex  items-center justify-center rounded-lg bg-white border border-black">
        <div className="w-[350px] h-fit flex flex-col justify-around ">
          <strong className="text-[32px] font-sans font-semibold">
            Budget
          </strong>
          <div className="w-full h-[79px] flex items-center gap-[10px] ">
            <BsTags className="w-[32px] h-[48px]" width={32} height={48} />
            <div className="w-fit h-[48px] flex items-center justify-between gap-[8px] font-sans font-semibold">
              <p className="text-[16px]">From</p>
              <div className="flex">
                <p className="text-[32px]">$399</p>
                <CiCircleInfo />
              </div>
            </div>
          </div>
          <div className="w-full h-[54px] flex items-center justify-between">
            <p>Per Pages</p>
            <p className="text-[#0D48A1]">$29</p>
          </div>
          <div className="w-full h-fit flex flex-col justify-between">
            {CheckBoxData.map((el, index) => {
              return <CheckBoxMap key={index} text={el.text} />;
            })}
          </div>
        </div>
      </div>
      <div className="w-[380px] h-[164px] flex  items-center  justify-center rounded-lg bg-white border border-black">
        <div className="w-[350px] h-fit gap-[20px]">
          <strong className="text-[24px]  ">Linked Accounts</strong>
          <div className="w-full h-[36px] flex gap-[10px] ">
            {LinkData.map((el, index) => {
              return <LinkMap key={index} linkIcon={el.linkIcon} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
