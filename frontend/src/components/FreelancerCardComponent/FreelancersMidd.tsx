"use client";
import React from "react";
import { FreelancerFilter } from "../FreelancerFilter/FreelancerFilter";
import { FreelancerCard } from "./FreelancerCard";
import { MouseEvent } from "react";
import { useRouter } from "next/navigation";
type Response = {
  _id: string;
  firstName: string;
  lastName: string;
  image: string;
  budget: string;
  email: string;
  phone: string;
  discription: string;
};

type MiddType = {
  AllUserData: Response[];
};

export default function FreelancersMidd(props: MiddType) {
  const { AllUserData } = props;

  const { push } = useRouter();

  const HandlerClicpush = (event: MouseEvent<HTMLDivElement>) => {
    const UserId = event.currentTarget.id;

    push(`/profile?id=${UserId}`);
  };

  return (
    <div className="flex md:flex-row flex-col w-screen items-start justify-center gap-5 pt-32">
      <FreelancerFilter mark={"NPL specialists"} counter={"45"} />
      <div className="flex w-fit md:w-[880px] sm:w-[800px]  h-fit  flex-wrap justify-center items-center gap-[30px] ">
        {AllUserData?.map((el: Response, i: number) => {
          return (
            <div id={el._id} onClick={HandlerClicpush} key={i}>
              <FreelancerCard
                star="stars"
                level="level"
                levelrank="levlelrank"
                name={`${el.firstName}  ${el.lastName}`}
                image={el.image}
                worktype="worktype"
                experience="experience"
                wages={`${
                  el.budget ? el.budget.toLocaleString() + "₮" : "Not specified"
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
