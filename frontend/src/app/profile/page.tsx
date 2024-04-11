import { Footer } from "@/components/Footer/Footer";

import { Menu } from "@/components/Menu/Menu";
import { Profile } from "@/components/Profile/Profile";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-[url(https://pixner.net/aihire/aihire/assets/img/bn/breadcumndbg.jpg)]">
        <Menu />
      </div>
      <Profile />
      <Footer />
    </div>
  );
};

export default page;
