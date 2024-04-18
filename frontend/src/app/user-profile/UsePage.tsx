"use client";
import { MainProfileSidebar } from "@/components/FreelancerProfileDetail/MainProfileSidebar";
import { DataContext } from "@/components/context/DataContext";
import { UPdateprofile } from "@/components/userProfile/UpdateProFile";
import React, { useContext, useEffect, useState } from "react";

type SetProDileype = {
  firstName: string;
  lastName: string;
  id: string;
  phone: string;
  location: string;
};

export const UsePage = () => {
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
    <div className="flex justify-center mt-[100px] gap-8 max-sm:flex-col sm:flex-col max-lg:flex-row xl:flex-row xl:w-[990px] xl:justify-center xl:mx-auto">
      <MainProfileSidebar profile={profile} data={data} />
      <UPdateprofile />
    </div>
  );
};
