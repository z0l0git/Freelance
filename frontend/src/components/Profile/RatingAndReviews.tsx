import { RatingMap } from "./ProfileMaps";
import { ReviewMap } from "./ProfileMaps";
import Image from "next/image";


const ratingData = [
  { starNumber: "5", width: "w-[90%]", percent: "90%" },
  { starNumber: "4", width: "w-[75%]", percent: "75%" },
  { starNumber: "3", width: "w-[67%]", percent: "67%" },
  { starNumber: "2", width: "w-[44%]", percent: "44%" },
  { starNumber: "1", width: "w-[21%]", percent: "21%" },
];

const reviewData = [
  {
    date: "Mar 03, 2023",
    time: "09:04 am",
    image: "/profiles.png",
    text: "I have been using the AI Freelancer Marketplace for my project needs, and I must say it has been an exceptional experience. The platform's advanced AI algorithms and intelligent matching system have connected me with top-notch AI freelancers who possess the skills",
    name: "Darrell Steward",
    jobType: "Software engineer",
    likeNum: "129",
  },
  {
    date: "Mar 03, 2023",
    time: "09:04 am",
    image: "/profiles.png",
    text: "I have been using the AI Freelancer Marketplace for my project needs, and I must say it has been an exceptional experience. The platform's advanced AI algorithms and intelligent matching system have connected me with top-notch AI freelancers who possess the skills",
    name: "Darrell Steward",
    jobType: "Software engineer",
    likeNum: "129",
  },
  {
    date: "Mar 03, 2023",
    time: "09:04 am",
    image: "/profiles.png",
    text: "I have been using the AI Freelancer Marketplace for my project needs, and I must say it has been an exceptional experience. The platform's advanced AI algorithms and intelligent matching system have connected me with top-notch AI freelancers who possess the skills",
    name: "Darrell Steward",
    jobType: "Software engineer",
    likeNum: "129",
  },
];

export const RatingAndReview = () => {
  return (
    <div className="w-[856px] py-5 px-5">
      <strong className="text-[24px]">Average Reviews</strong>
      <div className="w-full h-fit gap-[10px] flex flex-col py-6">
        {ratingData.map((el, index) => {
          return (
            <RatingMap
              key={index}
              starNumber={el.starNumber}
              width={el.width}
              percent={el.percent}
            />
          );
        })}
      </div>
      <div className="w-[800px] h-fit flex flex-col gap-[20px] ">
        {reviewData.map((el, index) => {
          return (
            <ReviewMap
              key={index}
              date={el.date}
              time={el.time}
              image={el.image}
              text={el.text}
              name={el.name}
              jobType={el.jobType}
              likeNum={el.likeNum}
            />
          );
        })}
      </div>
    </div>
  );
};
