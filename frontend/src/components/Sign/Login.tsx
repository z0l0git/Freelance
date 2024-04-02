import { useState } from "react";
import { Input } from "./Input";
import { InputPassWord } from "./PasswordInput";
import { FiMail } from "react-icons/fi";
import { ChangeEvent } from "react";
import { Button } from "./Button";
import { AxiosInstance } from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

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
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userdata, [name]: value });
  };

  const handleClick = async () => {
    console.log("try");

    try {
      const { data } = await AxiosInstance.post("/login", userdata);
      console.log(data, "token");

      localStorage.setItem("Token", data);

      // window.location.href = "/";
      push("/");
    } catch (err: any) {
      console.log(err.response.data);
      setError(err.response.data);
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
        {error && <div className="text-red-500 text-center">{error}</div>}

        <Button text="Login" onClick={handleClick} />
        <Link href="/sign-in">
          <button
            // onClick={() => push("/sign-in")}
            style={{ cursor: "pointer" }}
            className="w-[500px] h-[50px] flex justify-center items-center text-black bg-white rounded-[40px] font-semibold text-[25px] gap-[20px]"
          >
            <Image alt="" src="/google.jpeg" width={30} height={30} />
            Continue with google
          </button>
        </Link>
      </div>
    </div>
  );
};
