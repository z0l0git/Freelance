"use client";
import { useState } from "react";
import Image from "next/image";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
export const AboutUs = () => {
  const [stage, setStage] = useState(0);

  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  useEffect(() => {
    const sds = document.querySelectorAll(".indood");
    sds.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          duration: 3,
          x: 100,
          opacity: 0,
          ease: "ease-in",
        },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            id: `section${index + 1} `,
            trigger: el,
            start: "top 90%", // Start line
            end: "bottom 0%", // End line
            // markers: true,
            toggleActions: "play none nones reverse",
          },
        }
      );
    });
  }, []);

  const backgroundImage = useMotionTemplate`linear-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  return (
    <motion.section
      className="w-screen flex justify-center items-center py-[120px] sm:px-0 px-[40px] rounded-2xl"
      style={{ backgroundImage }}
    >
      <div className="xl:w-[1280px] w-[1020px] h-fit flex lg:flex-row flex-col lg:justify-between justify-center lg:items-start  items-center lg:gap-0 gap-[50px]">
        <div className="xl:w-[739px] lg:w-[530px] md:w-[700px] sm:w-[540px] w-fit flex flex-col gap-[20px]">
          <div className="indood text-[#0D47A9] text-[20px] font-semibold">
            About us
          </div>
          <div className="indood md:text-[40px] text-[30px] font-semibold">
            Our Service Provides Connections for Everyone
          </div>
          <div className="indood flex  sm:w-[400px] w-fit border-b border-slate-500 justify-between sm:gap-0 gap-[15px] ">
            <div
              onClick={(e) => {
                setStage(0);
              }}
              className={`pb-[10px] text-[17px] cursor-pointer font-semibold border-b  ${
                stage === 0 ? "text-[#0D47A9] border-[#0D47A9]" : ""
              }`}
            >
              Our Mission
            </div>
            <div
              onClick={(e) => {
                setStage(1);
              }}
              className={`pb-[10px] text-[17px]  cursor-pointer font-semibold border-b  ${
                stage === 1 ? "text-[#0D47A9] border-[#0D47A9]" : "]"
              }`}
            >
              Our Vission
            </div>
            <div
              onClick={(e) => {
                setStage(2);
              }}
              className={`pb-[10px] text-[17px]  cursor-pointer font-semibold border-b  ${
                stage === 2 ? "text-[#0D47A9] border-[#0D47A9]" : "]"
              }`}
            >
              How We Work
            </div>
          </div>
          <div className="indood sm:h-[120px] h-fit ">
            {stage == 0 && (
              <motion.div
                initial={{ scale: 0.96 }}
                animate={{
                  scale: 1,
                  transition: { duration: 0.7 },
                }}
              >
                Access a curated pool of highly skilled professionals with
                expertise in cutting-edge technologies. Find projects that align
                with your interests and showcase your capabilities. Collaborate
                with clients who value your expertise and provide opportunities
                for growth.
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
                We aim to connect professionals and employers fast, easy and
                conveniently. Ultimately, our vision is to be the catalyst for a
                thriving freelance economy, where skilled individuals can build
                fulfilling careers and businesses can access the expertise they
                need to succeed.
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
                Our website provides an easy to access platform for freelancers
                and employers to use, saving your valuable time. If you have any
                questions, please feel free to contact us.
                {/* <ul className="flex flex-col gap-[10px]">
                  <li>
                    <span className="font-semibold">Post a Project: </span>
                    <p>
                      Post the projects you want in detail to get them done by
                      professionals.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold">
                      Connect with Professionals:
                    </span>
                    <p>Find and Connect with the talent you are looking for</p>
                  </li>
                </ul> */}
              </motion.div>
            )}
          </div>
        </div>
        <div className="lg:w-[606px] md:w-[700px] sm:w-[540px] w-full  sm:h-[607px] h-[709px] ml-[20px]  relative">
          <div className="w-[335px] h-[135px] bg-[#0d47a1] rounded-2xl absolute z-20 bottom-0 right-0 flex justify-center gap-[20px] items-center px-[30px]">
            <div className="text-yellow-400 text-[70px] font-semibold">10+</div>
            <div className="text-[#fff] text-[20px] font-semibold">
              Trusted Clients
            </div>
          </div>
          <Image
            alt=""
            src="/r1.png"
            width={400}
            height={324}
            className="absolute top-[0px] right-[0px] rounded-2xl"
          />
          <Image
            alt=""
            src="/r2.jpg"
            width={300}
            height={364}
            className="absolute bottom-[40px] xl:left-[0px] lg:left-[80px] md:left-[0px]  rounded-2xl"
          />
          <Image
            alt=""
            src="/r4.png"
            width={100}
            height={100}
            className="absolute sm:bottom-[370px] bottom-[570px] xl:left-[130px] lg:left-[100px] md:left-[260px] left-[100px] rounded-[50%] animate-bounce"
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
    </motion.section>
  );
};
