import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { Menu } from "../Menu/Menu";
import { AboutUs } from "../aboutUs/AboutUs";
import { HomePagePart } from "../HomePagePart";
import { TextParallaxContentExample } from "../Paralax/Pralax";
import { HeaderText } from "./HeaderText";
import { Footer } from "../Footer/Footer";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="w-screen relative h-fit flex flex-col items-center overflow-hidden bg-gray-950 text-gray-200 snap-y"
    >
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={35000} factor={4} fade speed={2} />
        </Canvas>
      </div>
      <TextParallaxContentExample />\
    </motion.section>
  );
};
