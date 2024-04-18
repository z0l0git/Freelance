import React from "react";
import { Footer } from "@/components/Footer/Footer";
import { Menu } from "@/components/Menu/Menu";
import { UsePage } from "./UsePage";

const page = () => {
  return (
    <div className="flex flex-col bg-gray-50 w-screen">
      <div className="w-full sticky top-0">
        <Menu />
      </div>
      <UsePage />
      <Footer />
    </div>
  );
};

export default page;
