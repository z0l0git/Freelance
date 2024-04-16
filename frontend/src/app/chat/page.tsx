import { Menu } from "@/components/Menu/Menu";

import React from "react";

import { ChatPage } from "@/components/Chat/ChatPage";

const page = () => {
  return (
    <div>
      <Menu />
      <ChatPage />
    </div>
  );
};

export default page;
