import React from "react";
import { Footer } from "@/components/Footer/Footer";
import { Menu } from "@/components/Menu/Menu";
import { UsePage } from "./UsePage";
import { PageHeroes } from "@/components/Profilepath";
import { GetSkillCategory } from "@/utils/axiosInstance";
import axios from "axios";

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
      "http://localhost:8000/allUser"
    );
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

const page = async () => {
  const skill = await GetSkillCategory();
  const AllUser = await GetAllUser();

  return (
    <div className="flex flex-col bg-gray-50 w-screen items-center">
      <div className="w-full sticky top-0">
        <Menu />
      </div>
      <div>
        <PageHeroes
          PageBigName="Profile"
          Home="Home"
          PageLink="/user-profile"
          PageLinkName="User profile"
          ButtonClass="blueBorderButton responsivePatchCompButton"
          LandingPage="User profile"
          ButtonName="Log Out"
          PictureOfPage={""}
          pictureofalt={""}
          ImageClass="responsivePatchCompImage"
        />
      </div>
      <UsePage skill={skill} AllUser={AllUser} />
      <Footer />
    </div>
  );
};

export default page;
