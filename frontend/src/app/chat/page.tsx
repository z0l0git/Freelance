import { Chat } from "@/components/Chat/Chat";
import { Footer } from "@/components/Footer/Footer";
import { HeaderSearch } from "@/components/HeaderSearch/HeaderSearch";
import { Menu } from "@/components/Menu/Menu";

import React from "react";

const page = () => {
  return (
    <div>
      <Menu />
      <div className="">
        <Chat />
      </div>
    </div>
  );
};

export default page;
