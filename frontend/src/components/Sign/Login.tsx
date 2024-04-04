"use client";
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

export const Login = () => {
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
    <div className="flex flex-col   sm:w-[550px] w-fit px-[30px] ">
      <div className="mb-[45px]">
        <div className="font-semibold text-[35px] text-white ">
          Welcome back!
        </div>
        <div className="text-slate-400">
          Sign in to your account and join us
        </div>
      </div>

      <div className="flex flex-col gap-[28px]">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={hanldeSubmit}
        >
          {({ setFieldValue }) => (
            <Form className="flex flex-col gap-[28px]   ">
              <div>
                <div className="font-semibold text-white text-[20px] mb-3">
                  Enter Your Email ID
                </div>
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
              </div>
              <div>
                <div className="font-semibold text-white text-[20px] mb-3">
                  Enter Your Password
                </div>
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
              </div>

              <div className="flex justify-end text-white ">
                <div
                  // onClick={toReset}
                  className="cursor-pointer hover:text-blue-600 "
                >
                  Forgot Password?
                </div>
              </div>
              {error && <div className="text-red-500 text-center">{error}</div>}

              <div className=" flex flex-col gap-[18px]">
                <Button text="Login" type="submit" />
                <div className="flex">
                  <div className=" border-b border-white w-[50%] mb-[10px] mr-[10px]"></div>
                  <div className="text-white">or</div>
                  <div className=" border-b border-white w-[50%] mb-[10px] ml-[10px]"></div>
                </div>
                <Link href="/sign-in">
                  <button
                    // style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
                    // onClick={() => push("/sign-in")}
                    style={{
                      cursor: "pointer",
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    }}
                    className="w-full px-[5px] h-[50px] flex justify-center items-center text-black bg-white rounded-[40px] font-semibold sm:text-[25px] gap-[20px] text-[14px]"
                  >
                    <Image alt="" src="/google.jpeg" width={30} height={30} />
                    Continue with google
                  </button>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
