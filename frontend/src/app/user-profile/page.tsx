"use client";
import { Footer } from "@/components/Footer/Footer";
import { MainProfileSidebar } from "@/components/FreelancerProfileDetail/MainProfileSidebar";
import { Profilepath } from "@/components/FreelancerProfileDetail/Profilepath";
import { HeaderSearch } from "@/components/HeaderSearch/HeaderSearch";
import { Menu } from "@/components/Menu/Menu";
import { UPdateprofile } from "@/components/userProfile/UpdateProFile";
import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "@/components/context/DataContext";

type SetProDileype = {
  firstName: string;
  lastName: string;
  id: string;
  phone: string;
  location: string;
};

const page = () => {
  const { data } = useContext(DataContext);
  console.log(data, "data in update profile page");

  const [profile, setProfile] = useState({
    id: "",
    firstName: "",
    lastName: "",
    phone: "",
    location: "",
  });

  useEffect(() => {
    console.log("sdaa vee yadag");

    setProfile({
      ...profile,
      firstName: data?.firstName,
      // lastName: data?.lastName,
      // phone: data?.phone,
      // location: data?.location,
      // id: data?._id,
    });
  }, []);

  console.log(profile, "profile in update profile page");

  return (
    <div className="flex flex-col bg-gray-50 w-screen">
      <div className="w-full sticky top-0">
        <Menu />
      </div>

      <div className="flex justify-center mt-[100px]">
        <MainProfileSidebar profile={profile} data={data} />
        <UPdateprofile />

      </div>
      <Footer />
    </div>
  );
};

export default page;
