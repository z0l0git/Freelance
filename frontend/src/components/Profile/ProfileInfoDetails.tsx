import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import AlarmRoundedIcon from "@mui/icons-material/AlarmRounded";
import { DetailsMap } from "./ProfileMaps";

const DetailData = [
  {
    icon: <AccessTimeRoundedIcon className="w-[20px] h-[20px] text-[#FFF]" />,
    topic: "Delievery Time",
    text: "1-3 Days",
    color: "bg-[#0D47a1]",
  },
  {
    icon: <AlarmRoundedIcon className="w-[20px] h-[20px] text-[#FFF]" />,
    topic: "Response Times",
    text: "1 Hour",
    color: "bg-[#2E7D32]",
  },
  {
    icon: <LanguageRoundedIcon className="w-[20px] h-[20px] text-[#FFF]" />,
    topic: "Level of English",
    text: "Basic",
    color: "bg-[#FF5722]",
  },
  {
    icon: <GppGoodOutlinedIcon className="w-[25px] h-[25px] text-[#FFF]" />,
    topic: "Order Competetion",
    text: "100%",
    color: "bg-[#F3A102]",
  },
];

export const ProfileInfoDetails = (props: any) => {
  return (
    <>
      {DetailData.map((el, index) => {
        return (
          <DetailsMap
            key={index}
            icon={el.icon}
            topic={el.topic}
            text={el.text}
            color={el.color}
          />
        );
      })}
    </>
  );
};
