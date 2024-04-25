"use client";
import React, { ChangeEvent, useEffect } from "react";
import { FreelancerFilter } from "../FreelancerFilter/FreelancerFilter";
import { FreelancerCard } from "./FreelancerCard";
import { MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Noto_Sans_Indic_Siyaq_Numbers } from "next/font/google";
import axios from "axios";
type SkillT = {
  id?: string;
};
type SkillType = {
  name: string;
  id: string;
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

type TypeSda = {
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
interface YourObjectType {
  _doc: TypeSda;
  rating: number;
  howManyPeople: number;
}

type MiddType = {
  AllUser: YourObjectType[];
  skills: SkillType[];
};
type StarFilterType = {
  category: string;
};

type BudgetType = {
  min: number;
  max: number;
};

export default function FreelancersMidd(props: MiddType) {
  const { AllUser, skills } = props;

  const AllUserData = AllUser?.map((el) => {
    return el._doc;
  });

  const { push } = useRouter();

  const [allUserState, setAllUserState] = useState<TypeSda[]>(AllUserData);
  const [starName, setstarName] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [budget, setBudget] = useState<BudgetType>({
    min: 0,
    max: 0,
  });
  const [skillId, setSkillId] = useState<string>("");

  useEffect(() => {
    setAllUserState(AllUserData);
  }, [AllUser]);

  const filterByStar = (e: StarFilterType) => {
    const name = e.category;
    setstarName(name);
    setSkillId("");

    const starOnMap = name.split(" ")[0];

    const filteredArray = AllUser?.filter((el) => {
      const ratingString = el.rating.toString();
      return ratingString.split(".")[0] === starOnMap;
    }).map((el) => el._doc);

    setAllUserState(filteredArray);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBudget({ ...budget, [name]: value });
    setstarName("");
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
    setstarName("");
    // handleZero();

    const UserData: TypeSda[] = AllUserData?.filter((user) => {
      return user?.skills?.some((skill) => {
        return skill.name === e.name;
      });
    });

    setAllUserState(UserData);
  };

  const handleZero = () => {
    setBudget({ min: 0, max: 0 });
    setSkillId("");
  };

  const HandlerClicpush = (event: MouseEvent<HTMLDivElement>) => {
    const UserId = event.currentTarget.id;
    // window.location.href = `/profile?id=${UserId}`;
    push(`/profile?id=${UserId}`);
  };
  const HnadleSearch = async () => {
    // setCategory("");
    // setSkill("");

    const body = {
      filter: {
        $or: [
          {
            firstName: {
              $regex: search,
              $options: "i",
            },
          },
        ],
      },
    };

    try {
      const { data } = await axios.post("http://localhost:8000/allUser", body);
      setAllUserState(data);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const Handlereset = () => {
    handleZero();
    setSkillId("");
    setstarName("");
    // setAllUserState(AllUserData);
  };
  return (
    <div className="flex md:flex-row flex-col w-screen items-start justify-center gap-5 pt-32">
      <div className="sticky top-[80px]">
        <FreelancerFilter
          HnadleSearch={HnadleSearch}
          search={search}
          setSearch={setSearch}
          starName={starName}
          filterByStar={filterByStar}
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
      </div>
      <div>
        {allUserState.length === 0 ? (
          <div className="flex w-fit md:w-[880px] sm:w-[800px]  h-fit  flex-wrap justify-center items-center gap-[30px] ">
            <Image alt="" src="/error.png" width={500} height={300} />
          </div>
        ) : (
          <div className="flex  w-fit md:w-[880px] sm:w-[800px]  h-fit  flex-wrap justify-center items-center gap-[30px] ">
            {" "}
            {allUserState?.map((el: any, i: number) => {
              const userRating =
                AllUser?.find((user) => user._doc._id === el._id)?.rating || 0;
              const userHowManyPeople =
                AllUser?.find((user) => user._doc._id === el._id)
                  ?.howManyPeople || 0;

              return (
                <div id={el._id} onClick={HandlerClicpush} key={i}>
                  <FreelancerCard
                    star="stars"
                    level="level"
                    levelrank="levlelrank"
                    name={`${el.firstName}  ${el.lastName}`}
                    image={el.image}
                    worktype="worktype"
                    wages={`${
                      el.budget
                        ? el.budget.toLocaleString() + "₮"
                        : "Not specified"
                    }`}
                    rating={userRating}
                    howManyPeople={userHowManyPeople}
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
