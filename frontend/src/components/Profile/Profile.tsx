"use client";
import { ProfileDetails } from "./ProfileDetails";
import { Description } from "./Description";
import { Skills } from "./Skils";
import { Education } from "./Education";
import { WorkExprience } from "./WorkExprience";
import { UserDetails } from "./UserDetails";
import { FeatureServive } from "./FeautureService";
import { BadgetAndLinks } from "./Budget&Links";
import { RatingAndReview } from "./RatingAndReviews";
import { RevieComment } from "./ReviewComment";
import { useState } from "react";

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

type PropsType = {
  data: Response;
  searchParams: any;
};

export const Profile = (props: PropsType) => {
  const { data, searchParams } = props;

  console.log(data, "profile data");

  // const [profile, setProfile] = useState<Response>();
  return (
    <div className="py-6 flex flex-col md:flex-row items-center md:items-start md:justify-center gap-[20px] bg-[#F3F6FA] ">
      <div className="flex flex-col gap-[50px] ">
        <div className="[426px] md:w-[860px] flex items-center justify-center  bg-white border  rounded-lg">
          <div className="w-[406px] md:w[816px] flex flex-col items-center justify-around gap-[30px]">
            <ProfileDetails data={data} />
            <Description />
            <Skills />
            <Education />
            <WorkExprience />
            {/* <UserDetails /> */}
          </div>
        </div>
        {/* <div className="w-[426px] md:w-[860px] h-fit flex items-center justify-center bg-white rounded-lg ">
          <FeatureServive />
        </div> */}
        <div className="w-[426px] md:w-[860px] flex items-center justify-center  bg-white border  rounded-lg">
          <RatingAndReview searchParams={searchParams} />
        </div>
        <div className="w-[426px] md:w-[860px] flex items-center justify-center bg-white  rounded-lg">
          <RevieComment searchParams={searchParams} />
        </div>
      </div>
      <div className=" w-[402px] md:w-[416px] md:h-[623px] rounded-lg sticky top-0">
        <BadgetAndLinks />
      </div>
    </div>
  );
};
