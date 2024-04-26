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
import axios from "axios";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
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

  const notifySuccess = () => {
    toast.success("🦄 Welcome! You're now signed in", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const notifyError = () => {
    toast.error("❗ Oops! Incorrect email or password. Please try again", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

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
    console.log(values, "values");

    try {
      const { data } = await axios.post(
        "https://freelance-gmjr.onrender.com/login",
        values
      );

      if (data) {
        localStorage.setItem("token", data);
        push("/");
      }
      notifySuccess();
    } catch (err: any) {
      notifyError();
    }
  };

  return (
    <div className="flex flex-col   md:w-[550px] w-fit lg:px-[30px] px-[20px] ">
      <div className="lg:mb-[45px] mb-[25px]">
        <div className="font-semibold xs:text-[25px] text-[20px] text-white  ">
          Welcome back!
        </div>
        <div className="text-slate-400 sx:text-[18px] text-[12px] ">
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
            <Form className="flex flex-col xs:gap-[28px] gap-[18px]   ">
              <div>
                <div className="font-semibold text-white xs:text-[15px] text-[11px] mb-3">
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
                <div className="font-semibold text-white xs:text-[15px] text-[11px] mb-3">
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

              {error && <div className="text-red-500 text-center">{error}</div>}

              <div className=" flex flex-col xs:gap-[18px] gap-[8px]">
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
                    className="w-full px-[5px] xs:h-[45px] h-[35px] xs:text-[20px] sm:text-[12px] text-[10px] flex justify-center items-center text-black bg-white rounded-[40px] font-semibold  gap-[20px] text-[14px]"
                  >
                    <Image alt="" src="/google.jpeg" width={25} height={25} />
                    <div className="hidden xs:block">Continue with google</div>
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
