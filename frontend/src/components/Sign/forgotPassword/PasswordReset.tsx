import { Button } from "../Button";
import { InputPassWord } from "../PasswordInput";
import { ChangeEvent } from "react";
import React from "react";

type PasswordResetProps = {
  newPassFunc: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const PasswordReset = (props: PasswordResetProps) => {
  const { newPassFunc } = props;

  return (
    <div className="flex flex-col  ">
      <div className="font-normal text-[25px] text-white mb-[35px]">
        passwordoo shinechlene uu
      </div>
      <div className="mb-[35px] gap-[15px] flex flex-col">
        <InputPassWord
          placHolder="Password"
          name="password"
          onchange={(e: React.ChangeEvent<HTMLInputElement>) => newPassFunc(e)}
        />
        <InputPassWord
          placHolder="RePassword"
          name="RePassword"
          onchange={(e: React.ChangeEvent<HTMLInputElement>) => newPassFunc(e)}
        />
      </div>
    </div>
  );
};
