"use client";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { RiEditBoxLine } from "react-icons/ri";
import { useState } from "react";
import { NewGig } from "./NewGig";
import { UpdatePro } from "./UpdatePro";

export const UPdateprofile = () => {
  const [stage, setStage] = useState(0);

  return (
    <div>
      <div className="w-[856px] p-[32px] bg-white border border-gray-300 rounded-[15px]">
        <div className="bg-[#f8f9fc] flex gap-[20px] px-[20px] py-[20px] rounded-[15px] border border-gray-300 font-bold mb-[32px]">
          <div
            onClick={() => setStage(0)}
            className={`flex items-center gap-[6px] ${
              stage === 0 && "text-blue-700"
            } `}
          >
            <AiOutlineFileAdd className="text-[20px]" /> New Gig
          </div>
          <div
            onClick={() => setStage(1)}
            className={`flex items-center gap-[6px] ${
              stage === 1 && "text-blue-700"
            } `}
          >
            <BsFileEarmarkBarGraph className="text-[20px]" />
            Active Gig
          </div>
          <div
            onClick={() => setStage(2)}
            className={`flex items-center gap-[6px] ${
              stage === 2 && "text-blue-700"
            } `}
          >
            <RiEditBoxLine className="text-[20px]" />
            Update Profile
          </div>
        </div>
        <div>
          {stage === 0 && <NewGig />}
          {stage === 1 && <div>Active Gig</div>}
          {stage === 2 && (
            <div>
              <UpdatePro />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
