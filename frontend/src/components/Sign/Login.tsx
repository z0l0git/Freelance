import { useState } from "react";
import { Input } from "./Input";
import { InputPassWord } from "./PasswordInput";
import { FiMail } from "react-icons/fi";
import { ChangeEvent } from "react";
import { Button } from "./Button";
import React from "react";

import { AxiosInstance } from "../../utils/axiosInstance";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

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

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userdata, [name]: value });
  // };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(3, "too short password")
      .max(15, "too long password")

      .required("Password is required"),
  });

  const hanldeSubmit = async (values: typeof initialValues) => {
    console.log(values, "sadffa");
    try {
      const { data } = await AxiosInstance.post("/login", values);
      console.log(data, "token");
      localStorage.setItem("Token", data);
      // window.location.href = "/";
      push("/");
    } catch (err: any) {
      console.log(err.response.data);
      setError(err.response.data);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col  items-center">
      <div className="font-bold text-[35px] text-white mb-[35px]">Login</div>

      <div className="flex flex-col gap-[28px]">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={hanldeSubmit}
        >
          {({ setFieldValue }) => (
            <Form className="flex flex-col gap-[28px]">
              <Input
                type="email"
                icon={<FiMail />}
                placHolder="Email"
                name="email"
                onchange={(e) => setFieldValue("email", e.target.value)}
              />
              <ErrorMessage
                className="error text-red-600"
                name="email"
                component="div"
              />

              <InputPassWord
                name="password"
                placHolder="Password"
                onchange={(e) => setFieldValue("password", e.target.value)}
              />

              <ErrorMessage
                className="error text-red-600"
                name="password"
                component="div"
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

              <Button text="Login" type="submit" />
              <div className="flex">
                <div className=" border-b border-white w-[50%] mb-[10px] mr-[10px]"></div>
                <div className="text-white">or</div>
                <div className=" border-b border-white w-[50%] mb-[10px] ml-[10px]"></div>
              </div>
            </Form>
          )}
        </Formik>

        <Link href="/sign-in">
          <button
            // style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            // onClick={() => push("/sign-in")}
            style={{
              cursor: "pointer",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
            className="w-[100%] h-[50px] flex justify-center items-center text-black bg-white rounded-[40px] font-semibold sm:text-[25px] gap-[20px] text-[14px]"
          >
            <Image alt="" src="/google.jpeg" width={30} height={30} />
            Continue with google
          </button>
        </Link>
      </div>
    </div>
  );
};
