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
type SkillType = {
  name: string;
  id: string;
};

type PropsType = {
  skill: SkillType[];
};

export const UsePage = (props: PropsType) => {
  const { skill } = props;
  

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
    <div className="flex justify-center mt-[100px] gap-8 max-sm:flex-col sm:flex-col max-lg:flex-row xl:flex-row xl:w-[990px] xl:justify-center xl:mx-auto">
      <MainProfileSidebar profile={profile} data={data} skill={skill} />
      <UPdateprofile profile={profile} setProfile={setProfile} data={data} />
    </div>
  );
};
