import { Menu } from "@/components/Menu/Menu";

import React from "react";

import { ChatPage } from "@/components/Chat/ChatPage";

const page = () => {
  return (
    <div>
      <Menu />
      <div className="h-screen">
        <ChatPage />
      </div>
    </div>
  );
};

export default page;
