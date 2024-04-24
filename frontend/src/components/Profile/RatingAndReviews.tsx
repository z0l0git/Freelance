import { ReviewMap } from "./ProfileMaps";
import { useContext, useEffect, useState } from "react";

import axios from "axios";
import { DataContext } from "../context/DataContext";

type IdType = {
  searchParams: string;
  rdata: any;
  setRdata: any;
};

export const RatingAndReview = (props: IdType) => {
  const { data: userData } = useContext(DataContext);

  const { searchParams, rdata, setRdata } = props;

  useEffect(() => {
    const GetUserById = async () => {
      try {
        const reviews = await axios.post(
          "https://freelance-gmjr.onrender.com/getallreview",
          {
            createdFor: searchParams,
          }
        );
        console.log("this worked aHAHAH");
        setRdata(reviews.data);
        return;
      } catch (error: any) {
        throw new Error(error.message);
      }
    };
    GetUserById();
  }, [searchParams]);

  return (
    <div className="w-[382px] md:w-[856px] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center px-5 gap-[20px]">
        <div className="w-[382px] md:w-[800px] h-fit flex flex-col gap-[20px] py-6">
          {rdata?.map((el: any, index: any) => {
            return <ReviewMap key={index} userData={el} />;
          })}
        </div>
      </div>
    </div>
  );
};
