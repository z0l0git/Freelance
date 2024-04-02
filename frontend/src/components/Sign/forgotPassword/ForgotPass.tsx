import { Button } from "../Button";
import { useState } from "react";
import { MailSent } from "./MailSent";
import { CodeVerify } from "./Codeveryfy";
import { PasswordReset } from "./PasswordReset";
import React from "react";
import { ChangeEvent } from "react";

type ForgotPassProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  setChanger: React.Dispatch<React.SetStateAction<boolean>>;
  changer: boolean;
};
export const ForgotPass = (props: ForgotPassProps) => {
  const { setOpen, open, setChanger, changer } = props;

  const [stage, setStage] = useState(0);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const [newPassword, setNewPassword] = useState({
    password: "",
    RePassword: "",
  });

  const newPassFunc = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPassword({ ...newPassword, [name]: value });
  };

  const handleClick = () => {
    setOpen(!open);
    if (stage == 2) {
      setChanger(false);
    } else {
      setStage(stage + 1);
    }
  };

  return (
    <div>
      <div>{stage == 0 && <MailSent setEmail={setEmail} />}</div>
      <div>{stage == 1 && <CodeVerify setCode={setCode} />}</div>
      <div>{stage == 2 && <PasswordReset newPassFunc={newPassFunc} />}</div>

      <button
        onClick={handleClick}
        className="sm:w-[500px] w-[100%] h-[50px] flex justify-center items-center text-black bg-white rounded-[40px] font-bold text-[25px]"
      >
        {stage == 0 && "Email send"}
        {stage == 1 && "codo oruulah"}
        {stage == 2 && "Password oorchloh"}
      </button>
    </div>
  );
};
