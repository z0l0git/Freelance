"use client";
import React, { ChangeEvent, useEffect } from "react";
import { FreelancerFilter } from "../FreelancerFilter/FreelancerFilter";
import { FreelancerCard } from "./FreelancerCard";
import { MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Noto_Sans_Indic_Siyaq_Numbers } from "next/font/google";

type SkillT = {
  id?: string;
};
type Response = {
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
type SkillType = {
  name: string;
  id: string;
};

type MiddType = {
  AllUserData: Response[];
  skills: SkillType[];
};

type BudgetType = {
  min: number;
  max: number;
};

export default function FreelancersMidd(props: MiddType) {
  const { AllUserData, skills } = props;

  const { push } = useRouter();

  const [allUserState, setAllUserState] = useState<Response[]>(AllUserData);
  console.log(allUserState, "Alllfreelanserc adara");
  const [budget, setBudget] = useState<BudgetType>({
    min: 0,
    max: 0,
  });
  const [skillId, setSkillId] = useState<string>("");
  console.log(skillId, "skillId");

  useEffect(() => {
    setAllUserState(AllUserData);
  }, [AllUserData]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBudget({ ...budget, [name]: value });

    setSkillId("");
  };

  useEffect(() => {
    if (budget.min === 0 && budget.max === 0) {
      setAllUserState(AllUserData);
    } else {
      setAllUserState(
        AllUserData?.filter((el) => {
          return (
            Number(el.budget) >= budget.min && Number(el.budget) <= budget.max
          );
        })
      );
    }
  }, [budget]);

  const skillFilter = (e: SkillType) => {
    setSkillId(e.id);
    // handleZero();

    const UserData: Response[] = AllUserData?.filter((user) => {
      return user?.skills?.some((skill) => {
        return skill.name === e.name;
      });
    });

    console.log(UserData, "Userskiltei sda");
    setAllUserState(UserData);
  };

  const handleZero = () => {
    setBudget({ min: 0, max: 0 });
    setSkillId("");
  };

  const HandlerClicpush = (event: MouseEvent<HTMLDivElement>) => {
    const UserId = event.currentTarget.id;
    push(`/profile?id=${UserId}`);
  };

  const Handlereset = () => {
    handleZero();
    setSkillId("");
    // setAllUserState(AllUserData);
  };
  return (
    <div className="flex md:flex-row flex-col w-screen items-start justify-center gap-5 pt-32">
      <FreelancerFilter
        mark={"NPL specialists"}
        counter={"45"}
        handleChange={handleChange}
        handleZero={handleZero}
        budget={budget}
        Handlereset={Handlereset}
        skills={skills}
        skillFilter={skillFilter}
        skillId={skillId}
      />
      <div>
        {allUserState.length === 0 ? (
          <div className="flex w-fit md:w-[880px] sm:w-[800px]  h-fit  flex-wrap justify-center items-center gap-[30px] ">
            <Image alt="" src="/error.png" width={500} height={300} />
          </div>
        ) : (
          <div className="flex w-fit md:w-[880px] sm:w-[800px]  h-fit  flex-wrap justify-center items-center gap-[30px] ">
            {" "}
            {allUserState?.map((el: Response, i: number) => {
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
                      el.budget
                        ? el.budget.toLocaleString() + "₮"
                        : "Not specified"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
