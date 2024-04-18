import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
import { HeaderSearch } from "@/components/HeaderSearch/HeaderSearch";
import { Menu } from "@/components/Menu/Menu";
import { PageHeroes } from "@/components/Profilepath";
import React from "react";

const page = () => {
  return (
    <div className="bg-slate-200">
      <div className="bg-[url(https://pixner.net/aihire/aihire/assets/img/bn/breadcumndbg.jpg)]">
        <Menu />
      </div>
      <div className="mb-[250px]">
        <PageHeroes
          PageBigName="Contact Us"
          Home="Home"
          PageLink="/contact"
          PageLinkName="contact"
          ButtonClass="hidden"
          LandingPage="contact"
          ButtonName=""
          PictureOfPage="/contact.png"
          pictureofalt="Contact page"
          ImageClass="w-[406px] h-[373px] flex justify-center items-center responsivePatchCompImage max-sm:hidden"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
