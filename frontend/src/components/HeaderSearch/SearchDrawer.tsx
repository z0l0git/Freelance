import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { IoMdClose } from "react-icons/io";

export const SearchDrawer = () => {
  return (
    <Drawer direction="top">
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent>
        <input className="w-full h-[120%] outline-none px-4" />
        <div
          className="h-[120%] w-[15%] flex items-center justify-center"
          style={{
            background: "linear-gradient(90deg, #1A4DBE 0%, #AE5EBE 100%)",
          }}
        >
          <IoMdClose size={60} color="white" />
        </div>
      </DrawerContent>
    </Drawer>
  );
};
