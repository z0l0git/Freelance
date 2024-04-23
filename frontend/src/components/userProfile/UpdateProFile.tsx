"use client";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { RiEditBoxLine } from "react-icons/ri";
import { useState } from "react";
import { NewGig } from "./NewGig";
import { UpdatePro } from "./UpdatePro";
import ActiveProject from "./ActiveProject";

type SetProDileype = {
  firstName: string;
  lastName: string;
  id: string;
  phone: string;
  location: string;
  createdAt: string;
  image: string;
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
  image: string;
};
type SkillType = {
  name: string;
  id: string;
};

type TypeProps = {
  profile: SetProDileype;
  setProfile: React.Dispatch<
    React.SetStateAction<{
      id: string;
      firstName: string;
      lastName: string;
      phone: string;
      location: string;
      createdAt: string;
      image: string;
    }>
  >;
  data: Response;
  skill: SkillType[];
};
export const UPdateprofile = (props: TypeProps) => {
  const { profile, setProfile, data, skill } = props;

  const [stage, setStage] = useState(0);

  return (
    <>
      <div className="w-[80%] p-[32px] bg-white border border-gray-300 rounded-[15px] max-md:items-center justify-center max-sm:px-2  sm:px-2 max-md:mx-auto">
        <div className="bg-[#f8f9fc] flex gap-[20px] px-[20px] py-[20px] rounded-[15px] border border-gray-300 font-bold mb-[32px]">
          <div
            onClick={() => setStage(0)}
            className={`flex  cursor-pointer items-center gap-[6px] ${
              stage === 0 && "text-blue-700"
            } `}
          >
            <AiOutlineFileAdd className="text-[20px] xl:text-xl" /> New Project
          </div>
          <div
            onClick={() => setStage(1)}
            className={`flex cursor-pointer items-center gap-[6px] ${
              stage === 1 && "text-blue-700"
            } `}
          >
            <BsFileEarmarkBarGraph className="text-[20px] " />
            Active Projects
          </div>
          <div
            onClick={() => setStage(2)}
            className={`flex cursor-pointer items-center gap-[6px] ${
              stage === 2 && "text-blue-700"
            } `}
          >
            <RiEditBoxLine className="text-[20px] " />
            Update Profile
          </div>
        </div>
        <div>
          {stage === 0 && <NewGig />}
          {stage === 1 && (
            <div>
              <ActiveProject skill={skill} />
            </div>
          )}
          {stage === 2 && (
            <div>
              <UpdatePro
                profile={profile}
                setProfile={setProfile}
                data={data}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
