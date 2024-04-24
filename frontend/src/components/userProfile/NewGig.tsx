import Link from "next/link";
import { IoAddCircle } from "react-icons/io5";
export const NewGig = () => {
  return (
    <Link href={"/new-gig"}>
      <div className="sm:w-full sm:mx-2 cursor-pointer hover:bg-gray-100 hover:border-gray-400 flex flex-col items-center justify-center p-[32px] bg-white rounded-[15px] border border-gray-300 max-w-[306px] gap-[30px] ">
        <div>
          <IoAddCircle className="font-bold text-[100px] text-blue-600" />
        </div>
        <div className="font-bold text-[26px] text-center">
          Create new Project
        </div>
      </div>
    </Link>
  );
};
