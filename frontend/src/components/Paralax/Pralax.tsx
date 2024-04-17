import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { AboutUs } from "../aboutUs/AboutUs";

import { HomePagePart } from "../HomePagePart";
import { Menu } from "../Menu/Menu";
import { HeaderText } from "../Header/HeaderText";

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-transparent relative">
      <Menu />
      <TextParallaxContent>
        <HeaderText />
      </TextParallaxContent>
      <TextParallaxContent>
        <AboutUs />
      </TextParallaxContent>
      <TextParallaxContent>
        <AboutUs />
      </TextParallaxContent>

      <TextParallaxContent>
        <HomePagePart />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
  scrollChild,
}: any) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
      className="h-[100vh]"
    >
      <div className="relative w-screen">
        <OverlayCopy heading={heading} subheading={subheading}>
          {children}
        </OverlayCopy>
      </div>
    </div>
  );
};

const OverlayCopy = ({ subheading, heading, children }: any) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex w-full flex-col items-center h-fit justify-center text-white"
    >
      {children}
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Additional content explaining the above card here
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
        maiores voluptate est ut saepe accusantium maxime doloremque nulla
        consectetur possimus.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        reiciendis blanditiis aliquam aut fugit sint.
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

const Pralax = () => {
  const border = useMotionTemplate`1px solid `;
  const boxShadow = useMotionTemplate`0px 4px 24px `;
  return (
    <div className="z-10 flex items-center mt-[300px]">
      <HeaderText />
    </div>
  );
};
