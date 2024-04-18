import { RatingMap } from "./ProfileMaps";
import { ReviewMap } from "./ProfileMaps";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BlueButton } from "../Button";
import { useContext, useEffect, useState } from "react";

import axios from "axios";

type Datatype = {
  createdFor?: string;
};
type IdType = {
  searchParams: string;
};
type stateType = {
  _id: string;
  createdFor: string;
  stars: number;
  createdAt: Date;
  description: string;
  createdBy: string;
  likes: number;
};

export const RatingAndReview = (props: IdType) => {
  const { searchParams } = props;
  const [rdata, setRdata] = useState<stateType[]>([]);
  useEffect(() => {
    const GetUserById = async () => {
      try {
        const reviews = await axios.post("http://localhost:8000/getallreview", {
          createdFor: searchParams,
        });

        setRdata(reviews.data);
        return;
      } catch (error: any) {
        throw new Error(error.message);
      }
    };
    GetUserById();
  }, [searchParams]);

  console.log(rdata);

  return (
    <div className="w-[382px] md:w-[856px] flex flex-col items-center justify-center border border-black   ">
      <div className="flex flex-col items-center justify-center px-5 gap-[20px]">
        <div className="w-[382px] md:w-[800px] h-[34px] flex justify-between">
          <div className="flex items-center justify-between w-[180px] h-[34px]">
            <p>Sort by:</p>
            <Select>
              <SelectTrigger className="w-[108px] h-full rounded-[100px] font-bold items-center justify-center border-none">
                <SelectValue placeholder="New" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="New">New</SelectItem>
                  <SelectItem value="V1">V1</SelectItem>
                  <SelectItem value="V2">V2</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="w-[382px] md:w-[800px] h-fit flex flex-col gap-[20px] ">
          {rdata.map((el, index) => {
            return <ReviewMap key={index} userData={el} />;
          })}
        </div>
        <div className="py-5 ">
          <BlueButton buttonName="See All Reviews" />
        </div>
      </div>
    </div>
  );
};
