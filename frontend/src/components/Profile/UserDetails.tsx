import { TagsMap } from "./ProfileMaps";
import { LinkMap } from "./ProfileMaps";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

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
];

const TagData = [
  {
    tag: "Machine Learning",
  },
  {
    tag: "AI Chatbot",
  },
  {
    tag: "Virtual Assistna",
  },
];

export const UserDetails = () => {
  return (
    <div className=" w-[362px] h-fit md:w-[816px] flex flex-col gap-[24px] py-5 ">
      <p className="text-[16px]">
        These details provide an overview of the responsibilities and
        requirements for a Machine Learning, API, and Python Engineer. The
        specific tasks and technologies may vary depending on the companys focus
        and the projects being developed.
      </p>
      <div className="w-[362px] md:w-full flex flex-col md:flex-row text-[#0D47A1] text-[18px] gap-[20px] font-sans font-semibold justify-between  ">
        <div className="w-[362px] md:w-fit flex  gap-[20px] pl-2">
          <p>Tag-</p>
          <div className="flex flex-wrap gap-[20px]">
            {TagData.map((el, index) => {
              return <TagsMap key={index} tag={el.tag} />;
            })}
          </div>
        </div>
        <div className="w-fit flex items-center gap-[20px] ">
          <p className="text-[#0D47A1]">Share -</p>
          <div className="flex gap-[20px] cursor-pointer">
            {LinkData.map((el, index) => {
              return <LinkMap key={index} linkIcon={el.linkIcon} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
