import { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { BsEyeFill } from "react-icons/bs";

type SS = {
  placHolder: string;
  name: string;
  onchange: any;
};
export const InputPassWord = (props: SS) => {
  const { placHolder, name, onchange } = props;

  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="w-[500px] h-[50px] flex items-center justify-between  px-[25px]  border border-slate-300 rounded-[40px] text-[20px] text-[white]">
      <input
        name={name}
        onChange={onchange}
        placeholder={placHolder}
        className="bbb outline-none "
        type={`${show ? "password" : "text"}`}
      />

      <div onClick={handleShow} className="text-white">
        {show ? <AiFillEyeInvisible /> : <BsEyeFill />}
      </div>
    </div>
  );
};