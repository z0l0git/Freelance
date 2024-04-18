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
  createdAt: string;
  image: string;
};

export const UsePage = () => {
  const { data } = useContext(DataContext);

  const [profile, setProfile] = useState<SetProDileype>({
    id: "",
    firstName: "",
    lastName: "",
    phone: "",
    location: "",
    createdAt: "",
    image: "",
  });

  useEffect(() => {
    setProfile({
      ...profile,
      firstName: data?.firstName,
      lastName: data?.lastName,
      id: data?._id,
      phone: data?.phone,
      location: data?.location,
      createdAt: data?.createdAt,
      image: data?.image,
    });
  }, [data]);

  return (
    <div className="flex justify-center mt-[100px] gap-3">
      <MainProfileSidebar profile={profile} data={data} />
      <UPdateprofile profile={profile} setProfile={setProfile} data={data} />
    </div>
  );
};
