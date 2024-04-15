import React from "react";
import ProjectDetail from "@/components/projectDetail/ProjectDetail";
import axios from "axios";

type RequestBody = {
  id: string;
};

type SkillType = {
  name: string;
  id: string;
};

type PosdtDataType = {
  _id: string;
  createdBy: {
    firstName: string;
    lastName: string;
  };
  title: string;
  description: string;
  budget: number;
  deliveryTime: string;
  flexible: boolean;
  categorys: string[];
  skills: SkillType[];
};

const GetPostsById = async (id: string) => {
  try {
    const { data } = await axios.post<RequestBody>(
      "http://localhost:8000/getProjectById",
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
  const data = await GetPostsById(searchParams.id);

  return (
    <div>
      <ProjectDetail data={data as PosdtDataType[] | undefined} />
    </div>
  );
}
