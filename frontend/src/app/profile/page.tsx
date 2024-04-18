import { Footer } from "@/components/Footer/Footer";

import { Menu } from "@/components/Menu/Menu";
import { Profile } from "@/components/Profile/Profile";
import React from "react";
import axios from "axios";

type Response = {
  _id: string;
  firstName: string;
  lastName: string;
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
      "http://localhost:8000/getUserById",
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
  // console.log(searchParams.id, "idd");
  const data: any = await GetUserById(searchParams.id);
  console.log(data, "data");

  return (
    <div>
      <div className="bg-[url(https://pixner.net/aihire/aihire/assets/img/bn/breadcumndbg.jpg)]">
        <Menu />
      </div>
      <Profile searchParams={searchParams.id} data={data} />
      <Footer />
    </div>
  );
}
