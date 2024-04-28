import { Footer } from "@/components/Footer/Footer";

import { Menu } from "@/components/Menu/Menu";
import { Profile } from "@/components/Profile/Profile";
import React from "react";
import axios from "axios";
import { GetSkillCategory } from "@/utils/axiosInstance";

type Response = {
  _id: string;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  auth: string;
  socials: [];
  skills: [];
  education: [];
  workExp: [];
  createdAt: string;
};

type RequestBody = {
  id: string;
};

const GetUserById = async (id?: string) => {
  try {
    const { data } = await axios.post<RequestBody>(
      "https://freelance-gmjr.onrender.com/getUserById",
      {
        id: id,
      }
    );

    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};
export default async function ProfilePage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const data: any = await GetUserById(searchParams.id);
  const skill = await GetSkillCategory();

  return (
    <div>
      <div className="bg-[url(https://pixner.net/aihire/aihire/assets/img/bn/breadcumndbg.jpg)]">
        <Menu />
      </div>
      <Profile searchParams={searchParams.id} data={data} skill={skill} />
      <Footer />
    </div>
  );
}
