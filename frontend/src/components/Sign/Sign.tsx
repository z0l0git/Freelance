"use client";
import "./Sign.css";
import React from "react";
import { useState } from "react";
import { Login } from "./Login";
import { SignUp } from "./SignUp";

import { ForgotPass } from "./forgotPassword/ForgotPass";

export const Sign = () => {
  const [open, setOpen] = useState(false);
  const [changer, setChanger] = useState(false);
  const [stage, setStage] = useState(0);

  const rotateStyle = {
    transform: open ? "rotatey(360deg)" : "none",
    transition: "transform 1s ease",
  };

  const toReset = () => {
    setOpen(!open);

    setChanger(true);
  };

  const handleSwitch = () => {
    setOpen(!open);
    // setChanger(false);
  };

  return (
    <div>
      <div className="relative w-screen h-screen bg-black ">
        <video
          autoPlay
          muted
          loop
          className="w-[100%] h-[100%] object-cover z-[10]"
        >
          <source src="video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="z-[20] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          style={rotateStyle}
          className={`bbb rounded-[10px] w-[550px] h-fit pt-[40px] pb-[100px] px-[30px]  border border-gray-400 flex flex-col items-center gap-[25px] `}
        >
          {!changer && (
            <div>
              {open ? (
                <SignUp setOpen={setOpen} />
              ) : (
                <Login toReset={toReset} />
              )}
            </div>
          )}

          {changer && (
            <div>
              <ForgotPass
                setOpen={setOpen}
                open={open}
                setChanger={setChanger}
                changer={changer}
              />
            </div>
          )}

          {/* <div className=" ">
            <button className="w-[500px] h-[50px] flex justify-center items-center text-black bg-white rounded-[40px] font-bold text-[25px]">
              {stage === 0 && <div>{open ? "SingUp" : "Login"}</div>}
              {stage === 1 && "Meail ilgeeh"}
              {stage === 2 && "code shalgeh"}
              {stage === 3 && "password reset"}
            </button>
          </div> */}

          {!changer && (
            <div>
              {!open ? (
                <div className="text-white ">
                  Don not you have an account?
                  <span
                    onClick={handleSwitch}
                    className="text-blue-500 cursor-pointer"
                  >
                    {" "}
                    SingUp
                  </span>
                </div>
              ) : (
                <div className="text-white ">
                  Do you have an account?
                  <span
                    onClick={handleSwitch}
                    className="text-blue-500 cursor-pointer"
                  >
                    {" "}
                    SignIn
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
