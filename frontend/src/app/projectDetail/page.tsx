import React from "react";
import ProjectDetail from "@/components/projectDetail/ProjectDetail";
import axios from "axios";

type RequestBody = {
  id: string;
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
  console.log(data, "data in");

  return (
    <div>
      this is page
      <ProjectDetail />
    </div>
  );
}
