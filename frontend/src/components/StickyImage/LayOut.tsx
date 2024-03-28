"use client";

import Image from "next/image";
import { LuSearchCode } from "react-icons/lu";
import { GrReactjs } from "react-icons/gr";

export const StickyImageLayout = () => {
  return (
    <div>
      <div className="w-[100%] h-fit ">
        <div className="h-[1050px] w-[50%]  absolute  left-[0px] bg-white"></div>
        <div className="sm:h-[1050px] h-[1200px]  w-[985px]  fixed z-10 top-0 right-0  ">
          <Image
            alt=""
            src="https://res.cloudinary.com/dxarul6xr/image/upload/v1711522283/a3xj4objgeywljih9bpi.jpg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="relative">
          <div className="w-screen sm:h-[700px] h-fit  z-40 absolute sm:top-[100px] top-[40px] flex justify-center ">
            <div className="w-[1280px] h-[100%] flex ">
              <div className="  sm:py-[100px] py-[10px] rounded-[18px] pr-[30px] pl-[10px] flex flex-col gap-[20px] justify-center bg-white mx-[40px]">
                <div className="sm:text-[30px] text-[19px] font-semibold text-blue-700 sm:mt-[100px] mt-[10px]">
                  Building High-Performing Teams
                </div>
                <div className="sm:text-[42px] text-[22px] font-bold sm:leading-[50px] leading-[30px]">
                  Unlock the Power of Exceptional AI Teams Created with Ease
                </div>
                <div className="sm:text-[16px] text-[13px]">
                  At our AI Freelancer Marketplace, we understand that success
                  stems from building amazing teams. We provide the platform and
                  resources to connect you
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
        </div>
      </div>
    </div>
  );
};
