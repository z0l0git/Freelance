import { ChangeEvent } from "react";
import { BiSolidUser } from "react-icons/bi";

type SS = {
  icon: any;
  placHolder: string;
  name: string;
  onchange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};
export const Input = (props: SS) => {
  const { icon, placHolder, name, onchange, type } = props;
  return (
    <div className="w-full h-[50px] flex items-center justify-between  px-[25px]  border border-slate-300 rounded-[40px] text-[20px] text-[white]">
      <input
        type={type}
        required
        name={name}
        onChange={onchange}
        placeholder={placHolder}
        className="bbb outline-none w-[100%]"
      />
      {/* <BiSolidUser style={{ color: "white" }} /> */}
      <div className="text-white">{icon}</div>
    </div>
  );
};
