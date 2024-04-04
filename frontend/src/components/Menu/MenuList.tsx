import React from "react";
import { motion } from "framer-motion";

export const MenuList = () => {
  return (
    <motion.div
      initial={{ top: -50 }}
      animate={{
        top: 175,
        transition: { duration: 0.3, bounce: 0.3 },
      }}
      exit={{ top: -50 }}
      className="w-[80%] flex md:hidden flex-col gap-3 bg-[#222e48] p-[15px] text-white "
    >
      <div className="w-full border-[0.5px] solid p-[10px] hover:text-blue-500 cursor-pointer">
        Browse Projects
      </div>
      <div className="w-full border-[0.5px] solid p-[10px] hover:text-blue-500 cursor-pointer">
        Find Freelancers
      </div>
      <div className="w-full border-[0.5px] solid p-[10px] hover:text-blue-500 cursor-pointer">
        Contact
      </div>
    </motion.div>
  );
};
