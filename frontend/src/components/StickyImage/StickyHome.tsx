import React from "react";
import { LuSearchCode } from "react-icons/lu";

export const StickyHome = () => {
  return (
    <div className="bg-[url(https://res.cloudinary.com/dxarul6xr/image/upload/v1711522283/a3xj4objgeywljih9bpi.jpg)] bg-no-repeat bg-cover xl:bg-contain bg-right w-screen py-[110px] h-fit flex justify-center items-center">
      <div className="w-[70%] h-full flex ">
        <div className="h-[70%] sm:py-[100px] py-[10px] px-[20px] rounded-[18px] pr-[30px] pl-[10px] flex flex-col gap-[20px] justify-center bg-white mx-[40px]">
          <div className="sm:text-[30px] text-[19px] font-semibold text-blue-700 sm:mt-[100px] mt-[10px]">
            Building High-Performing Teams
          </div>
          <div className="sm:text-[42px] text-[22px] font-bold sm:leading-[50px] leading-[30px]">
            Unlock the Power of Exceptional AI Teams Created with Ease
          </div>
          <div className="sm:text-[16px] text-[13px]">
            At our AI Freelancer Marketplace, we understand that success stems
            from building amazing teams. We provide the platform and resources
            to connect you
          </div>
          <div className="flex flex-col gap-[20px] sm:mb-[100px] mb-[10px]">
            <div className="flex lg:flex-row flex-col  lg:gap-[0px] gap-[30px]">
              <div className="flex gap-[20px] items-center">
                <div className="p-[10px] rounded-full hover:text-white text-blue-400 hover:bg-blue-400 bg-slate-300">
                  <LuSearchCode className="text-[30px]" />
                </div>
                <div>
                  <div className="font-semibold">Hire Quickly</div>
                  <div className="sm:text-[16px] text-[11px]">
                    Explore AI-focused freelancer marketplaces where you
                  </div>
                </div>
              </div>
              <div className="flex gap-[20px] items-center ">
                <div className="p-[10px] rounded-full bg-blue-400 ">
                  <LuSearchCode className="text-[30px]" />
                </div>
                <div>
                  <div className="font-semibold">Hire Quickly</div>
                  <div className="sm:text-[16px] text-[11px]">
                    Explore AI-focused freelancer marketplaces where you
                  </div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col  lg:gap-[0px] gap-[20px]">
              <div className="flex gap-[20px] items-center ">
                <div className="p-[10px] rounded-full bg-blue-400 ">
                  <LuSearchCode className="text-[30px]" />
                </div>
                <div>
                  <div className="font-semibold">Hire Quickly</div>
                  <div className="sm:text-[16px] text-[11px]">
                    Explore AI-focused freelancer marketplaces where you
                  </div>
                </div>
              </div>
              <div className="flex gap-[20px] items-center ">
                <div className="p-[10px] rounded-full bg-blue-400 ">
                  <LuSearchCode className="text-[30px]" />
                </div>
                <div>
                  <div className="font-semibold">Hire Quickly</div>
                  <div className="sm:text-[16px] text-[11px]">
                    Explore AI-focused freelancer marketplaces where you
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-[1080px] lg:w-[400px] w-[0px]  "></div>
      </div>
    </div>
  );
};
