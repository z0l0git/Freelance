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

export const Profile = () => {
  return (
    <div className=" w-[426px] py-6 md:w-screen  flex flex-col md:flex-row items-center md:items-start md:justify-center gap-[20px] bg-[#F3F6FA]  border border-black ">
      <div className="flex flex-col gap-[20px] ">
        <div className="[426px] md:w-[860px] flex items-center justify-center  bg-white border  rounded-lg">
          <div className="w-[406px] md:w[816px] flex flex-col items-center justify-around">
            <ProfileDetails />
            <Description />
            <Skills />
            <Education />
            <WorkExprience />
            <UserDetails />
          </div>
        </div>
        <div className="w-[426px] md:w-[860px] h-fit flex items-center justify-center bg-white rounded-lg ">
          <FeatureServive />
        </div>
        <div className="w-[426px] md:w-[860px] flex items-center justify-center  bg-white border  rounded-lg">
          <RatingAndReview />
        </div>
        <div className="w-[426px] md:w-[860px] flex items-center justify-center bg-white border border-black rounded-lg">
          <RevieComment />
        </div>
      </div>
      <div className=" w-[402px] md:w-[416px] md:h-[623px]  rounded-lg ">
        <BadgetAndLinks />
      </div>
    </div>
  );
};
