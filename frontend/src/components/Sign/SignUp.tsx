import { Input } from "./Input";
import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { AiTwotonePhone } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { InputPassWord } from "./PasswordInput";
import { useState } from "react";
import { ChangeEvent } from "react";
import { Button } from "./Button";
import { AxiosInstance } from "../../utils/axiosInstance";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

type LoginDataType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
};

type SignUpType = {
  setStage: React.Dispatch<React.SetStateAction<number>>;
};

export const SignUp = (props: SignUpType) => {
  const { setStage } = props;
  const [error, setError] = useState("");

  // const [userdata, setUserData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   password: "",
  // });

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userdata, [name]: value });
  // };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),

    lastName: Yup.string().required("Last name is required"),

    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    phone: Yup.string()
      .matches(
        /^[6789][0-9]{7}$/,
        "Phone number must start with 6,7,8 or 9 and be 8 digits in total"
      )
      .required("Phone number is required"),

    password: Yup.string()
      .min(3, "too short password")
      .max(15, "too long password")
      .required("Password is required"),
    repassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Please confirm your password"),
  });

  const createAccountFunc = async (values: typeof initialValues) => {
    try {
      const { data } = await AxiosInstance.post("createUser", values);
      console.log(data);
      if (typeof data === "string") {
        console.log("User already exists");
        setError("User already exists");
        setTimeout(() => {
          setError("");
        }, 2000);
      } else {
        setStage(0);
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col  sm:w-[550px] w-fit px-[30px]  ">
      <div className="mb-[35px]">
        <div className="font-bold text-[35px] text-white ">
          Let’s Get Started!
        </div>
        <div className="text-slate-400">
          Please enter your email address to join us
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={createAccountFunc}
        validationSchema={validationSchema}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="flex flex-col gap-[28px] mb-[30px]">
              <div className="flex gap-[10px]">
                <div>
                  <div className="font-semibold text-white text-[20px] mb-3">
                    First Name
                  </div>
                  <Input
                    icon={<BiSolidUser />}
                    placHolder="firstName"
                    name="firstName"
                    onchange={(e) => setFieldValue("firstName", e.target.value)}
                  />
                  <ErrorMessage
                    className="error text-red-600"
                    name="firstName"
                    component="div"
                  />
                </div>
                <div>
                  <div className="font-semibold text-white text-[20px] mb-3">
                    Last Name
                  </div>
                  <Input
                    icon={<BiSolidUser />}
                    placHolder="lastName"
                    name="lastName"
                    onchange={(e) => setFieldValue("lastName", e.target.value)}
                  />
                  <ErrorMessage
                    className="error text-red-600"
                    name="lastName"
                    component="div"
                  />
                </div>
              </div>
              <div>
                <div className="font-semibold text-white text-[20px] mb-3">
                  Enter your email
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
                  Enter your phone number
                </div>
                <Input
                  type="number"
                  icon={<AiTwotonePhone />}
                  placHolder="Phone"
                  name="phone"
                  onchange={(e) => setFieldValue("phone", e.target.value)}
                />
                <ErrorMessage
                  className="error text-red-600"
                  name="phone"
                  component="div"
                />
              </div>
              <div>
                <div className="font-semibold text-white text-[20px] mb-3">
                  enter your password
                </div>
                <InputPassWord
                  placHolder="Password"
                  name="password"
                  onchange={(e) => setFieldValue("password", e.target.value)}
                />
                <ErrorMessage
                  className="error text-red-600"
                  name="password"
                  component="div"
                />
              </div>
              <div>
                <div className="font-semibold text-white text-[20px] mb-3">
                  re-Passowrd
                </div>
                <InputPassWord
                  placHolder="RePassword"
                  name="repassword"
                  onchange={(e) => setFieldValue("repassword", e.target.value)}
                />
                <ErrorMessage
                  className="error text-red-600"
                  name="repassword"
                  component="div"
                />
              </div>
              {error && <div className="text-red-500 text-center">{error}</div>}
              <div className="mt-[20px]">
                <Button text="Create" type="submit" />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
