import { IoAddCircle } from "react-icons/io5";
export const NewGig = () => {
  return (
    <div className="flex flex-col items-center justify-center p-[32px] bg-white rounded-[15px] border border-gray-300 w-[306px] gap-[30px]">
      <div>
        <IoAddCircle className="font-bold text-[100px] text-blue-600" />
      </div>
      <div className="font-bold text-[26px]">Create a new Gig</div>
    </div>
  );
};
