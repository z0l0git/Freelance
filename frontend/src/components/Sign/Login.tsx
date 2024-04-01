import { useState } from "react";
import { Input } from "./Input";
import { InputPassWord } from "./PasswordInput";
import { FiMail } from "react-icons/fi";
import { ChangeEvent } from "react";
import { Button } from "./Button";

type LoginDataType = {
  email: string;
  password: string;
};
type LoginProps = {
  toReset: () => void;
};

export const Login = (props: LoginProps) => {
  const { toReset } = props;
  const [userdata, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userdata, [name]: value });
  };

  return (
    <div className="flex flex-col  items-center">
      <div className="font-bold text-[35px] text-white mb-[35px]">Login</div>
      <div className="flex flex-col gap-[28px]">
        <Input
          icon={<FiMail />}
          placHolder="Email"
          name="email"
          onchange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <InputPassWord
          name="password"
          placHolder="Password"
          onchange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <div className="flex justify-end text-white ">
          <div
            onClick={toReset}
            className="cursor-pointer hover:text-blue-600 "
          >
            Forgot Password?
          </div>
        </div>

        <Button text="Login" />
      </div>
    </div>
  );
};
