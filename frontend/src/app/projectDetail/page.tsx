import React from "react";
import ProjectDetail from "@/components/projectDetail/ProjectDetail";
import axios from "axios";
import { Menu } from "@/components/Menu/Menu";
import { Footer } from "@/components/Footer/Footer";

type RequestBody = {
  id: string;
};

type SkillType = {
  name: string;
  id: string;
};

type CtType = {
  _id: string;
  name: string;
  description: string;
};

type PosdtDataType = {
  _id: string;
  createdBy: {
    firstName: string;
    lastName: string;
    createdAt: string;
  };
  title: string;
  description: string;
  budget: number;
  deliveryTime: string;
  flexible: boolean;
  categorys: CtType[];
  skills: SkillType[];
  createdAt: string;
};

const GetPostsById = async (id: string) => {
  try {
    const { data } = await axios.post<RequestBody>(
      "https://freelance-gmjr.onrender.com/getProjectById",
      {
        id: id,
      }
    );

    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

export default async function ProjectDetailPage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const data: any = await GetPostsById(searchParams.id);
  console.log(data.createdBy, "by zolooo");

  return (
    <div className="">
      <Menu />
      <ProjectDetail data={data as any} />
      <Footer />
    </div>
  );
}
