import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
import { HeaderSearch } from "@/components/HeaderSearch/HeaderSearch";
import { Menu } from "@/components/Menu/Menu";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-[url(https://pixner.net/aihire/aihire/assets/img/bn/breadcumndbg.jpg)]">
        <HeaderSearch />
        <Menu />
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default page;
