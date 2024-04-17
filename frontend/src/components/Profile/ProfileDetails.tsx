import { CiLocationOn } from "react-icons/ci";
import { TbPointFilled } from "react-icons/tb";
import StarIcon from "@mui/icons-material/Star";
import { ProfileInfoDetails } from "./ProfileInfoDetails";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";
import { format } from "path";
type Response = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  auth: string;
  socials: [];
  skills: [];
  education: [];
  workExp: [];
  createdAt: string;
};

type PropsType = {
  data: Response;
};

export const ProfileDetails = (props: PropsType) => {
  const { data } = props;
  console.log(data?.firstName, "first");

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

  return (
    <div className="w-[426px] h-fit items-center justify-around gap-[10px] border border-inherit   md:w-[816px] md:h-fit md:py-8 rounded-lg flex flex-col md:items-center md:justify-center ">
      <div className="w-[406px] h-fit flex-col px-5 py-5  bg-white  justify-between md:w-[774px] md:h-[145px] flex md:flex-row md:items-center md:justify-between md:pb-[24px]">
        <div className="flex justify-start md:items-center md:justify-center">
          <Image
            src={"/profilemain.jpeg"}
            alt=""
            width={95}
            height={95}
            className="rounded-full w-[95px] h-[95px] "
          />
        </div>

        <div className=" w-[320px] h-[155px] md:w-[616px] md:h-[145px]">
          <div className="md:w-[615px] md:h-[105px] md:flex md:flex-col md:justify-around">
            <strong className="text-[24px] font-semibold font-sans">
              {`  ${data?.firstName} ${data?.lastName}`}
            </strong>
            <p className="text-[16px] text-[#222E48] font-sans">
              Machine Learner
            </p>
          </div>
          <ul className="w-full h-[24px] flex flex-col md:flex-row justify-between ">
            <li className="flex gap-[10px] items-center">
              <CiLocationOn size={24} color="#0d47a1" />
              <p className="text-[16px] text-[#404A60] font-sans ">Japan</p>
            </li>
            <li className="w-fit h-[24px] flex justify-around items-center gap-[10px] ">
              <TbPointFilled />
              <StarIcon className="text-[#febf58] " />
              <p>
                <span className="font-bold">4.8</span> (114){" "}
              </p>
            </li>
            <li className="w-fit h-[24px] flex justify-around items-center gap-[10px] ">
              <TbPointFilled />
              <p>Member:</p>
              <p className="text-[#0D47A1]">{FormatedDate}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex flex-wrap gap-[10px]  w-[384px] h-[122px] md:w-[774px] md:h-[54px] divide-x divide-solid  md:flex md:justify-between ">
        <ProfileInfoDetails />
      </div>
    </div>
  );
};
