import { Input } from "./Input";
import { BiSolidUser } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { AiTwotonePhone } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { InputPassWord } from "./PasswordInput";
import { useState } from "react";
import { ChangeEvent } from "react";
import { Button } from "./Button";

type LoginDataType = {
  name: string;
  email: string;
  phone: string;
  password: string;
};
export const SignUp = () => {
  const [userdata, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userdata, [name]: value });
  };

  return (
    <div className="flex flex-col  items-center">
      <div className="font-bold text-[35px] text-white mb-[35px]">Create</div>
      <div className="flex flex-col gap-[28px] mb-[30px]">
        <Input
          icon={<BiSolidUser />}
          placHolder="Username"
          name="name"
          onchange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <Input
          icon={<FiMail />}
          placHolder="Email"
          name="email"
          onchange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <Input
          icon={<AiTwotonePhone />}
          placHolder="Phone"
          name="phone"
          onchange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <InputPassWord
          placHolder="Password"
          name="password"
          onchange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <InputPassWord
          placHolder="RePassword"
          name="RePassword"
          onchange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <div className="mt-[20px]">
          <Button text="Create" />
        </div>
      </div>
    </div>
  );
};
