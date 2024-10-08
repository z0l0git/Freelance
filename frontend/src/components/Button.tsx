"use client";
import { IoMdSearch } from "react-icons/io";
import { HiArrowUpRight } from "react-icons/hi2";

export const OrangeButton = (props: any) => {
  const { buttonName } = props;
  return (
    <button className="group relative px-[31px] py-[15px] overflow-hidden rounded-[100px] bg-[#f3a104] text-lg font-bold text-[#201b2f] flex items-center gap-2">
      {buttonName}
      <IoMdSearch />
      <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-[#2196f3] text-white flex items-center justify-center gap-2">
        {buttonName}
        {<IoMdSearch />}
      </div>
    </button>
  );
};
export const BlueButton = (props: any) => {
  const { buttonName, type = "", height, width, handleSubmit } = props;
  return (
    <button
      onClick={handleSubmit}
      style={{ width: width, height: height }}
      type={type}
      className="group w-full h-full relative px-[31px] py-[15px] overflow-hidden rounded-[100px] bg-[#0d47a1] text-lg font-bold text-white md:h-[60%] lg:h-[40%] sm:h-[20%]"
    >
      <div className="absolute inset-0 h-full z-0 w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:text-transparent group-hover:bg-white/40"></div>
      <p>{buttonName}</p>
    </button>
  );
};

export const NeuButton = (props: any) => {
  const { buttonName, bClass = "" } = props;
  return (
    <button
      className={`${bClass} rounded-xl px-6 py-2 font-medium w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]`}
    >
      {buttonName}
    </button>
  );
};

export const WhiteButton = (props: any) => {
  const { buttonName, buttonClass, type, onClick, key = "", disabled } = props;
  return (
    <button
      disabled={disabled}
      key={key}
      type={type}
      className={buttonClass}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
};

type ButtonWithBlueBorderProps = {
  handlePrevious?: () => void;
  buttonName?: string;
  type?: "submit" | "button" | "reset";
  height?: string;
  width?: string;
};

export const ButtonWithBlueBorder = (props: ButtonWithBlueBorderProps) => {
  const {
    buttonName = "",
    type = "submit",
    height = "",
    width = "",
    handlePrevious = () => {},
  } = props;

  return (
    <button
      onClick={handlePrevious}
      type={type}
      className="group relative px-[31px] py-[15px] overflow-hidden rounded-[100px] border-blue-500 border-[1px] text-lg font-bold text-[#0f48a2] flex items-center gap-1"
      style={{ height: height, width: width }}
    >
      {buttonName}
      <HiArrowUpRight />
      <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-[#2196f3] text-white flex items-center justify-center">
        {buttonName}
        <HiArrowUpRight />
      </div>
    </button>
  );
};
