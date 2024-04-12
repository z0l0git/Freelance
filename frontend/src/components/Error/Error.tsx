"use client";
import Image from "next/image";
import { BlueButton } from "../Button";
import { MdArrowOutward } from "react-icons/md";
import { useRouter } from "next/navigation";

export const Error = () => {
  const { push } = useRouter();

  const handlePush = () => {
    push("/");
  };
  return (
    <div className="w-screen h-screen flex flex-col  items-center justify-center ">
      <div className="flex flex-col items-center justify-between rounded-lg w-[402px] h-[430px] md:w-[880px] md:h-[685px] ">
        <div className="w-[402px] h-[201px] md:w-[826px] md:h-[430px]">
          <Image src={"/error.png"} alt="" width={826} height={430} />
        </div>
        <div className="w-[402px] md:w-[636px] flex flex-col items-center justify-center h-fit py-5 ">
          <strong className="text-[29px] md:text-[40px]">
            Oops! Page Not Found
          </strong>
          <p className="text-[14px] text-center md:text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      {/* <BlueButton
        height="50px"
        width="192px"
        buttonName="Back To Home"
        handleSubmit={handlePush}
      /> */}
    </div>
  );
};
