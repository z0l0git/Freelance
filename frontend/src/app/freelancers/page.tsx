import React from "react";

import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { HomeCardJobs } from "@/components/HomeCard/HomeCardJobs";
import { FreelancerCard } from "@/components/FreelancerCardComponent/FreelancerCard";
import { FreelancerFilter } from "@/components/FreelancerFilter/FreelancerFilter";
import { Filter } from "@/components/Filter/Filter";
import { Contact } from "@/components/Contact/Contact";
import axios from "axios";
import FreelancersMidd from "@/components/FreelancerCardComponent/FreelancersMidd";
import { Menu } from "@/components/Menu/Menu";
import { Footer } from "@/components/Footer/Footer";
import { PageHeroes } from "@/components/Profilepath";
import { GetSkillCategory } from "@/utils/axiosInstance";

type SkillType = {
  name: string;
  id: string;
};

interface YourObjectType {
  _doc: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    discription: string;
    location: string;
    createdAt: string;
    image: string;
    jobTitle: string;
    budget: number;
    skills: SkillType[];
  };
  rating: number;
  howManyPeople: number;
}

const GetAllUser = async () => {
  try {
    const { data } = await axios.get<YourObjectType[]>(
      "https://freelance-gmjr.onrender.com/allUser"
    );
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

const Chinzorig = async () => {
  const AllUser = await GetAllUser();

  const skills: SkillType[] = await GetSkillCategory();

  return (
    <div
      className="flex flex-col gap-[20px] 
    bg-slate-200"
    >
      <Menu />
      <div>
        <PageHeroes
          PageBigName="Freelancers"
          Home="Home"
          PageLink="/freelancers"
          PageLinkName="freelancers"
          ButtonClass="hidden"
          LandingPage="freelancers"
          ButtonName=""
          PictureOfPage={"/bread-service.png"}
          pictureofalt={""}
          ImageClass={"w-[406px] h-[373px] flex justify-center items-center"}
        />
      </div>
      <FreelancersMidd AllUser={AllUser as YourObjectType[]} skills={skills} />
      <Footer />
    </div>
  );
};

export default Chinzorig;
