import { ChangeEvent, useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { BsEyeFill } from "react-icons/bs";

type SS = {
  placHolder: string;
  name: string;
  onchange: (event: ChangeEvent<HTMLInputElement>) => void;
  // type: string;
  // id: string;
};
export const InputPassWord = (props: SS) => {
  const { placHolder, name, onchange } = props;

  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="w-[100%] xs:h-[45px] h-[35px] flex items-center justify-between  px-[25px]  border border-slate-300 rounded-[40px] text-[15px] text-[white]">
      <input
        // id={id}
        name={name}
        onChange={onchange}
        placeholder={placHolder}
        className="bbb outline-none w-[100%]"
        type={`${show ? "password" : "text"}`}
      />

      <div onClick={handleShow} className="text-white">
        {show ? <AiFillEyeInvisible /> : <BsEyeFill />}
      </div>
    </div>
  );
};
