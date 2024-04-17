import { Footer } from "@/components/Footer/Footer";
import { MainProfileSidebar } from "@/components/FreelancerProfileDetail/MainProfileSidebar";
import { Profilepath } from "@/components/FreelancerProfileDetail/Profilepath";
import { HeaderSearch } from "@/components/HeaderSearch/HeaderSearch";
import { Menu } from "@/components/Menu/Menu";
import { UPdateprofile } from "@/components/userProfile/UpdateProFile";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col bg-gray-50 w-screen">
      <div className="w-full sticky top-0">
        <Menu />
      </div>
      <div className="w-full flex bg-[url(https://pixner.net/aihire/aihire/assets/img/bn/breadcumndbg.jpg)] mt-[-100px] ">
        <Profilepath />
      </div>
      <div className="w-[1200px] mx-auto mt-[-250px]">
        <div className="flex gap-8 mt-[100px] w-full max-md:flex-col">
          <MainProfileSidebar />
          <UPdateprofile />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
