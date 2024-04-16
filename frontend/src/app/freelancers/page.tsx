import React from "react";

import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { HomeCardJobs } from "@/components/HomeCard/HomeCardJobs";
import { FreelancerCard } from "@/components/FreelancerCardComponent/FreelancerCard";
import { FreelancerFilter } from "@/components/FreelancerFilter/FreelancerFilter";
import { Filter } from "@/components/Filter/Filter";
import { Contact } from "@/components/Contact/Contact";
import axios from "axios";
import FreelancersMidd from "@/components/FreelancerCardComponent/FreelancersMidd";

type Response = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  discription: string;
};

const GetAllUser = async () => {
  try {
    const { data } = await axios.get("http://localhost:8000/allUser");
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

const Chinzorig = async () => {
  const AllUserData = await GetAllUser();
  console.log(AllUserData, "datasgdee broda");

  return (
    <div>
      <FreelancersMidd AllUserData={AllUserData} />
    </div>
  );
};

export default Chinzorig;
