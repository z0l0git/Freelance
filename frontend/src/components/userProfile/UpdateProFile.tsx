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
    <div className="max-sm:w-[95%] max-sm:p-4 max-md:w-[70%]  p-8 bg-white border border-gray-300 rounded-[15px] w-full">
      {/* ax-md:items-center justify-center max-sm:px-2  sm:px-2 max-md:mx-auto */}
      <div className="bg-[#f8f9fc] flex gap-[20px] px-[20px] py-[20px] rounded-[15px] border border-gray-300 font-bold mb-[32px] max-sm:flex-wrap">
        <div
          onClick={() => setStage(0)}
          className={`flex  cursor-pointer items-center gap-[6px] ${
            stage === 0 && "text-[#0D47A1]"
          } `}
        >
          <AiOutlineFileAdd className="text-[20px] xl:text-xl" /> New Project
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

          <div
            onClick={() => setStage(1)}
            className={`flex cursor-pointer items-center gap-[6px] ${
              stage === 1 && "text-[#0D47A1]"
            } `}
          >
            <BsFileEarmarkBarGraph className="text-[20px] " />
            Active Projects
          </div>
          <div
            onClick={() => setStage(2)}
            className={`flex cursor-pointer items-center gap-[6px] ${
              stage === 2 && "text-[#0D47A1]"
            } `}
          >
            <RiEditBoxLine className="text-[20px] " />
            Update Profile
          </div>
        </div>
        <div className="">
          {stage === 0 && <NewGig />}
          {stage === 1 && <div>Active Projects</div>}
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
    </div>
  );
};
