import { HeaderLeft } from "@/components/Header/HeaderLeft";
import { HeaderRight } from "@/components/Header/HeaderRight";

export const Header = () => {
  return (
    <div className="flex justify-between md:w-screen md:h-[108px] md:relative z-40 bg-black  md:flex md:items-center md:justify-center ">
      <div className=" h-[80px] flex items-center justify-between w-full md:w-[1296px] md:h-[60px] md:flex md:items-center md:justify-between border border-black  ">
        <HeaderLeft />
        <HeaderRight />
      </div>
    </div>
  );
};
