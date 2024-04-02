import { CiLocationOn } from "react-icons/ci";
import { TbPointFilled } from "react-icons/tb";
import StarIcon from '@mui/icons-material/Star';
import { ProfileInfoDetails } from "./ProfileInfoDetails";

export const ProfileDetails = () => {
    return (
        <div className="w-[816px] h-[219px] py-8 rounded-lg flex flex-col items-center justify-center ">
            <div className="w-[774px] h-[145px] flex items-center justify-between pb-[24px]">
                <div className="w-[105px] h-[105px] rounded-full border border-black "></div>
                <div className="w-[615px] h-[105px]flex flex-col justify-around">
                    <strong className="text-[24px] font-semibold font-sans">Darrell Steward</strong>
                    <p className="text-[16px] text-[#222E48] font-sans">Machine Learner</p>
                    <ul className="w-full h-[24px] flex flex-row justify-between ">
                        <li className="flex  items-center">
                            <CiLocationOn width={18} height={18} />
                            <p className="text-[16px] text-[#404A60] font-sans ">Japan</p>
                        </li>
                        <li className="w-fit h-[24px] flex justify-around items-center gap-[10px] ">
                            <TbPointFilled />
                            <StarIcon className="text-[#febf58] " />
                            <p>4.8(114)</p></li>
                        <li className="w-fit h-[24px] flex justify-around items-center gap-[10px] ">
                            <TbPointFilled />
                            <p>Member:</p>
                            <p className="text-[#0D47A1]">January 5, 2023</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-[774px] h-[54px] divide-x divide-solid  flex justify-between ">
                <ProfileInfoDetails />
            </div>
        </div>
    )
}