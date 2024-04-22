import React from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { MouseEvent } from "react";
type TypeFtrops = {
  title1: string;
  title2: string;
  schoolName: string;
  profession: string;
  index: number;
  deleteEdu: (event: MouseEvent<HTMLDivElement>) => Promise<void>;
  id: string;
  deletemodal: (event: MouseEvent<HTMLDivElement>) => void;
  editEdu: (event: MouseEvent<HTMLDivElement>) => void;
};
export default function EducationModelOfMap(props: TypeFtrops) {
  const {
    schoolName,
    profession,
    index,
    deleteEdu,
    id,
    deletemodal,
    editEdu,
    title1,
    title2,
  } = props;
  return (
    <div className="flex justify-between items-center  border-b border-gray-300">
      <div className="flex py-[20px] gap-[10px]">
        <div className="flex justify-center items-center w-10 h-10 rounded-full  bg-blue-700 text-white text-center">
          {index + 1}
        </div>
        <div>
          <div className="flex items-center gap-[5px]">
            <div className="text-[15px] font-semibold ">{title1}: </div>
            <div className="text-[12px]">{schoolName}</div>
          </div>
          <div className="flex items-center gap-[5px]">
            <div className="text-[15px] font-semibold ">{title2}: </div>
            <div className="text-[12px]"> {profession}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[7px]">
        <div
          className="cursor-pointer text-[23px]"
          onClick={deletemodal}
          id={id}
        >
          <MdOutlineDeleteSweep />
        </div>
        <div className="cursor-pointer text-[23px]" onClick={editEdu} id={id}>
          <BiEditAlt />
        </div>
      </div>
    </div>
  );
}
