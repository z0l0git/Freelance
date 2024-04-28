"use client";
import Image from "next/image";
import { HeaderSearch } from "./HeaderSearch/HeaderSearch";
import React, { useEffect } from "react";
import { Menu } from "./Menu/Menu";
import { NeuButton } from "./Button";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// const BubbleText = () => {
//   return (
//     <h2 className="text-center text-5xl font-thin text-indigo-300">
//       {"Bubbbbbbbble text".split("").map((child, idx) => (
//         <span className={hoverText} key={idx}>
//           {child}
//         </span>
//       ))}
//     </h2>
//   );
// };

export const HeaderHero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".sda",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1 }
    );
    gsap.fromTo(
      ".sda1",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5 }
    );
    gsap.fromTo(
      ".sda2",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 2 }
    );
    gsap.fromTo(
      ".sda3",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 2.5 }
    );
  }, []);
  return (
    <div className="w-screen relative z-20 bg-[url(https://pixner.net/aihire/aihire/assets/img/bn/bnbg1.jpg)]  bg-cover no-repeat ">
      <Menu />
      <div className="w-screen lg:h-[784px] h-[870px] relative flex justify-center gap-3 items-center">
        <div className="w-[40%] flex flex-col gap-4">
          <h1 className="sda text-[#f3a102] text-[24px] font-bold">
            Get Your Projects Done
          </h1>
          <h2 className="sda1 text-[72px] font-bold  leading-[80px]">
            Find the Right <span className="text-[#2196f3]">Freelancers</span>{" "}
            for Your Projects
          </h2>
          <p className="sda2 text-[20px] font-semibold">
            Join our community of businesses, entrepreneurs, and freelancers who
            are looking for the right talent or be the right talent.
          </p>
          <div className="flex gap-4">
            <NeuButton
              buttonName={"Projects"}
              bClass={
                "sda3 w-[150px] text-xl text-[#000] h-[50px] bg-[#f3a102] rouned-xl hover:bg-white hover:text-[#f3a102] shadow-[3px_3px_0px_slategray]"
              }
            />
            <NeuButton
              buttonName={"Freelancers"}
              bClass={
                "sda3 text-[#2196f3] w-[200px] text-xl bg-none shadow-[3px_3px_3px_#2196f3] hover:bg-[#2196f3] hover:text-white"
              }
            />
          </div>
        </div>
        <div className="w-[636px] h-[615px] relative">
          <div className="absolute top-0 left-0 w-full h-full bg-cover no-repeat bg-[url(https://pixner.net/aihire/aihire/assets/img/bn/vec1.png)] animate-[rotate_9s_ease-in-out_infinite] "></div>
          <div className="bg-[url(https://pixner.net/aihire/aihire/assets/img/bn/bannerthumb1.png)] absolute top-0 left-0 w-full h-full bg-cover no-repeat"></div>
        </div>
      </div>
    </div>
  );
};
