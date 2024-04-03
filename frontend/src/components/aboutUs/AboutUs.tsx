"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export const AboutUs = () => {
  const [stage, setStage] = useState(0);
  console.log(stage);

  return (
    <div>
      <div className="w-screen h-screen flex justify-center items-center ">
        <div className="w-[1280px]  h-[700px] flex justify-between ">
          <div className="w-[739px] flex flex-col gap-[20px]">
            <div className="text-[#0D47A9] text-[20px] font-semibold">
              About us
            </div>
            <div className="text-[40px] font-semibold">
              Our Comprehensive Services Provide The Power of AI
            </div>
            <div className="flex  w-[400px] border-b border-slate-500 justify-between  ">
              <div
                onClick={(e) => {
                  setStage(0);
                }}
                className={`pb-[10px] text-[17px] font-semibold  border-slate-500 ${
                  stage === 0 ? "text-[#0D47A9] border-[#0D47A9]" : "]"
                }`}
              >
                Our Mission
              </div>
              <div
                onClick={(e) => {
                  setStage(1);
                }}
                className={`pb-[10px] text-[17px] font-semibold  border-slate-500 ${
                  stage === 1 ? "text-[#0D47A9] border-[#0D47A9]" : "]"
                }`}
              >
                Our Vission
              </div>
              <div
                onClick={(e) => {
                  setStage(2);
                }}
                className={`pb-[10px] text-[17px] font-semibold  border-slate-500 ${
                  stage === 2 ? "text-[#0D47A9] border-[#0D47A9]" : "]"
                }`}
              >
                How We Work
              </div>
            </div>
            <div>
              {stage == 0 && (
                <motion.div
                  initial={{ scale: 0.96 }}
                  animate={{
                    scale: 1,
                    transition: { duration: 0.7 },
                  }}
                >
                  Access a curated pool of highly skilled AI professionals with
                  expertise in cutting-edge technologies. Find AI projects that
                  align with your interests and showcase your capabilities.
                  Collaborate with clients who value your expertise and provide
                  opportunities for growth.
                </motion.div>
              )}
              {stage == 1 && (
                <motion.div
                  initial={{ scale: 0.96 }}
                  animate={{
                    scale: 1,
                    transition: { duration: 0.7 },
                  }}
                >
                  Access a curated pool of highly skilled AI professionals with
                  expertise in cutting-edge technologies. Find AI projects that
                  align with your interests and showcase your capabilities.
                  Collaborate with clients who value your expertise and provide
                  opportunities for growth.
                </motion.div>
              )}
              {stage == 2 && (
                <motion.div
                  initial={{ scale: 0.96 }}
                  animate={{
                    scale: 1,
                    transition: { duration: 0.7 },
                  }}
                >
                  Access a curated pool of highly skilled AI professionals with
                  expertise in cutting-edge technologies. Find AI projects that
                  align with your interests and showcase your capabilities.
                  Collaborate with clients who value your expertise and provide
                  opportunities for growth.
                </motion.div>
              )}
            </div>
          </div>
          <div className="w-[606px] h-[607px] ml-[20px] bg-slate-500 relative">
            <div className="w-[335px] h-[135px] bg-blue-700 rounded-2xl absolute z-20 bottom-0 right-0 flex justify-center items-center ">
              <div className="text-yellow-400 text-[70px] font-semibold">
                30+
              </div>
              <div className="text-[#fff] text-[30px] font-semibold">
                Years of experience
              </div>
            </div>
            <Image
              alt=""
              src="/r1.jpeg"
              width={400}
              height={324}
              className="absolute top-[0px] right-[0px] rounded-2xl"
            />
            <Image
              alt=""
              src="/r2.jpeg"
              width={300}
              height={364}
              className="absolute bottom-[40px] left-[0px] rounded-2xl"
            />
            <Image
              alt=""
              src="/r4.png"
              width={80}
              height={80}
              className="absolute bottom-[370px] left-[130px] rounded-2xl animate-bounce"
            />
            <Image
              alt=""
              src="/r3.png"
              width={120}
              height={120}
              className="absolute bottom-[220px] right-[210px] rounded-2xl animate-bounce 4s repeat-infinite"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
