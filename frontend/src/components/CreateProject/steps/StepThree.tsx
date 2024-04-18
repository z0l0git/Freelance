import { NameInputComponent } from "@/components/Input";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import { useState, useEffect } from "react";

type DataType = {
  name: string;
  description: string;
  _id: string;
};

type PosdtDataType = {
  createdBy: string;
  title: string;
  description: string;
  budget: string;
  deliveryTime: string;
  flexible: boolean;
  categorys: string[];
  skillss: string[];
};
type StepThreeProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPostData: React.Dispatch<React.SetStateAction<PosdtDataType>>;
  postData: PosdtDataType;
};
const StepThree = (props: StepThreeProps) => {
  const { handleChange, setPostData, postData } = props;
  const [flexible, setFlexible] = useState(false);
  console.log(flexible);

  const HandleFlexible = () => {
    setFlexible(!flexible);
  };

  useEffect(() => {
    setPostData({ ...postData, flexible: flexible });
  }, [flexible]);

  return (
    <div className="flex gap-5">
      <div className="flex flex-col border rounded-xl p-4 gap-4 w-[750px]">
        <div className="flex flex-col gap-6">
          <p className="font-bold text-[18px] text-[#212e48]">
            Enter your budget
          </p>
          <NameInputComponent
            type="number"
            handleChange={handleChange}
            name1="budget"
            placeholder="Enter Budget (MNT)"
            className="text-black flex"
          />
        </div>
        <div className="flex items-center gap-2 mt-4">
          <Checkbox id="terms" onClick={HandleFlexible} />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Price is negotiable (Optional)
          </label>
        </div>
        <div className="flex flex-col gap-6 mt-8">
          <p className="font-bold text-[18px] text-[#212e48]">
            Enter delivery time in days
          </p>
          <NameInputComponent
            handleChange={handleChange}
            placeholder="day(s)"
            name1="deliveryTime"
            className="text-black flex"
          />
        </div>
      </div>
      <div className="border rounded-xl w-[434px] h-[450px]">
        <div className="flex flex-col m-4 gap-5">
          <h1 className="font-bold  text-[#212e48] text-[22px]">
            Now let&apos;s talk budget and timing
          </h1>
          <p>
            You&apos;re not committing to anything final here.This just helps us
            find you the most relevant
          </p>
          <Image src="/matching.png" width={400} height={400} alt="matching" />
        </div>
      </div>
    </div>
  );
};

export default StepThree;
