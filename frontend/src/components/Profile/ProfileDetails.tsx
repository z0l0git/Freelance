import { CiLocationOn } from "react-icons/ci";
import { TbPointFilled } from "react-icons/tb";
import StarIcon from "@mui/icons-material/Star";
import { ProfileInfoDetails } from "./ProfileInfoDetails";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";

export const ProfileDetails = () => {
  return (
    <div className="w-[426px] md:w-[816px] md:h-[219px] md:py-8 rounded-lg flex flex-col items-center justify-center ">
      <div className="w-[406px] h-fit flex flex-col items-center justify-between md:w-[774px] md:h-[145px] md:flex md:items-center md:justify-between md:pb-[24px]">
        <div className="border border-black md:relative md:w-[130px] md:h-[130px] md:flex md:items-center md:justify-center md:rounded-full ">
          <div className=" md:absolute md:z-0 md:w-[95px] md:h-[95px] rounded-full  ">
            <Image
              src={"/profiles.png"}
              alt=""
              width={95}
              height={95}
              className="rounded-full w-[95px] h-[95px]"
            />
          </div>
          <div className="absolute z-10 md:bottom-[20%] md:right-[6%] md:w-[25px] md:h-[25px] md:flex md:items-center md:justify-center md:rounded-full  md:bg-[#43A047]">
            <CheckIcon className="text-white" />
          </div>
        </div>
        <div className="w-[615px] h-[105px]flex flex-col justify-around">
          <strong className="text-[24px] font-semibold font-sans">
            Darrell Steward
          </strong>
          <p className="text-[16px] text-[#222E48] font-sans">
            Machine Learner
          </p>
          <ul className="w-full h-[24px] flex flex-row justify-between ">
            <li className="flex  items-center">
              <CiLocationOn width={18} height={18} />
              <p className="text-[16px] text-[#404A60] font-sans ">Japan</p>
            </li>
            <li className="w-fit h-[24px] flex justify-around items-center gap-[10px] ">
              <TbPointFilled />
              <StarIcon className="text-[#febf58] " />
              <p>4.8(114)</p>
            </li>
            <li className="w-fit h-[24px] flex justify-around items-center gap-[10px] ">
              <TbPointFilled />
              <p>Member:</p>
              <p className="text-[#0D47A1]">January 5, 2023</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap w-[320px] h-[193px] md:w-[774px] md:h-[54px] divide-x divide-solid  md:flex md:justify-between ">
        <ProfileInfoDetails />
      </div>
    </div>
  );
};
