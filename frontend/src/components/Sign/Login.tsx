import { useState } from "react";
import { Input } from "./Input";
import { InputPassWord } from "./PasswordInput";
import { FiMail } from "react-icons/fi";
import { ChangeEvent } from "react";
import { Button } from "./Button";
import { AxiosInstance } from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";

type LoginDataType = {
  email: string;
  password: string;
};
type LoginProps = {
  toReset: () => void;
};

export const Login = (props: LoginProps) => {
  const { toReset } = props;
  const { push } = useRouter();
  const [userdata, setUserData] = useState({
    email: "",
    password: "",
  });
  console.log(userdata, "userdata");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userdata, [name]: value });
  };

  const handleClick = async () => {
    try {
      const { data } = await AxiosInstance.post("/login", userdata);
      console.log(data, "token");

      localStorage.setItem("Token", data);

      // window.location.href = "/";
      push("/");
    } catch (err: any) {
      console.log(err.message);
    }
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

        <Button text="Login" onClick={handleClick} />
      </div>
    </div>
  );
};
