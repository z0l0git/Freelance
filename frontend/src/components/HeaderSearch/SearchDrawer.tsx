import React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

import { IoSearchOutline } from "react-icons/io5";

export const SearchDrawer = () => {
  return (
    <Drawer direction="top">
      <DrawerTrigger>
        <IoSearchOutline />
      </DrawerTrigger>
      <DrawerContent>
        <input className="w-full h-[120%] outline-none px-4 " />
        <div
          className="h-[120%] w-[15%] flex items-center justify-center cursor-pointer"
          style={{
            background: "linear-gradient(90deg, #1A4DBE 0%, #AE5EBE 100%)",
          }}
        >
          <IoSearchOutline size={60} color="white " />
        </div>
      </DrawerContent>
    </Drawer>
  );
};
