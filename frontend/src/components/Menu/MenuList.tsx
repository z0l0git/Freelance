import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const MenuList = () => {
  return (
    <motion.div
      initial={{ top: -50 }}
      animate={{
        top: 175,
        transition: { duration: 0.5, bounce: 0.3 },
      }}
      exit={{ top: -50 }}
      className="w-full transition-all duration-300 flex md:hidden flex-col gap-3 bg-[#222e48] p-[15px] text-white rounded-lg rounded-t-none"
    >
      <div className="w-full border-[0.5px] solid p-[10px] hover:text-blue-500 cursor-pointer rounded-md transition-all duration-300">
        <Link href="/projects">Projects</Link>
      </div>
      <div className="w-full border-[0.5px] solid p-[10px] hover:text-blue-500 cursor-pointer rounded-md transition-all duration-300">
        <Link href="/freelancers">Freelancers</Link>
      </div>
      <div className="w-full border-[0.5px] solid p-[10px] hover:text-blue-500 cursor-pointer rounded-md transition-all duration-300">
        <Link href="/contact">Contact</Link>
      </div>
    </motion.div>
  );
};
