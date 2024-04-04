import { Footer } from "@/components/Footer/Footer";
import { MainProfileSidebar } from "@/components/FreelancerProfileDetail/MainProfileSidebar";
import { HeaderSearch } from "@/components/HeaderSearch/HeaderSearch";
import { Menu } from "@/components/Menu/Menu";
import { NewGig } from "@/components/userProfile/NewGig";
import { UpdatePro } from "@/components/userProfile/UpdatePro";
import { UPdateprofile } from "@/components/userProfile/UpdateProFile";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-[url(https://pixner.net/aihire/aihire/assets/img/bn/breadcumndbg.jpg)]">
        <HeaderSearch />
        <Menu />
      </div>
      <div className="flex justify-center mt-[100px]">
        <MainProfileSidebar />
        <UPdateprofile />
      </div>
      <Footer />
    </div>
  );
};

export default page;
