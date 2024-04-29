"use client";
import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { TextAreaComponent } from "../../components/TextArea";

import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Menu } from "../Menu/Menu";
import { BlueButton } from "../Button";

import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

type Props = {
  name: string;
  placeholder: string;
  type: string;
  className: string;
};

export const NameInputComponent = (props: Props) => {
  const { name, placeholder, type, className = "" } = props;
  return (
    <div className={className}>
      <Label htmlFor={`form-${name}`}>{name}</Label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        className="w-full bg-slate-100"
      />
    </div>
  );
};

const notifySuccess = () => {
  toast.success(
    "Your message has been sent successfully. Thank you for contacting us.",
    {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    }
  );
};

const notifyError = () => {
  toast.error("❗ Oops! There seems to be problem sending your message", {
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

async function handleSubmit(event: any) {
  event.preventDefault();
  try {
    const formData = new FormData(event.target);

    const response = await fetch("/api/contact", {
      method: "post",
      body: formData,
    });
    notifySuccess();
    formData
      .getAll("Name")
      .forEach((value: any, key: any) => console.log(`${key}: ${value}`));
    event.target.reset();
  } catch (err: any) {
    notifyError();

    console.log(err);
  }
}

export const Contact = () => {
  return (
    <div className="flex w-screen justify-center items-center py-10 bg-slate-200 ">
      <div className="flex w-[1280px] justify-start items-start gap-5 max-lg:flex-col max-md:mt-[-200px] max-md:w-10/12 max-sm:w-full max-sm:items-center">
        <div className="flex flex-col w-[416px] h-fill p-8 rounded-2xl bg-white shadow-xl max-lg:w-[696px] max-lg:items-center max-md:w-11/12 max-md:items-center">
          <div className="flex flex-col gap-4 max-lg:w-full">
            <div className="flex flex-col mb-8 w-full">
              <h3 className="text-2xl font-semibold">Need more help?</h3>
            </div>
            <div className="flex items-center justify-start gap-2 py-6 px-5 border border-[#dfe0e4] rounded-2xl max-lg:justify-start bg-slate-100">
              <div className="">
                <IoCallOutline
                  color="#0d47a1"
                  className=" bg-white w-[80px] h-[80px] p-3 flex items-center justify-center border border-[#dfe0e4] rounded-full"
                />
              </div>
              <div className="flex flex-col justify-center border-solid  w-fit ">
                <h2 className="text-xl font-semibold mb-4">Call Now</h2>
                <h6>80052392</h6>
              </div>
            </div>
            <div className="flex items-center justify-start gap-2 py-6 bg-slate-100 px-5 border border-[#dfe0e4] rounded-2xl max-lg:justify-start">
              <div className="">
                <CiMail
                  color="#0d47a1"
                  className=" bg-white w-[80px] h-[80px] p-3 flex items-center justify-center border border-[#dfe0e4] rounded-full"
                />
              </div>
              <div className="flex flex-col justify-center border-solid  w-fit ">
                <h2 className="text-xl font-semibold mb-5">Email</h2>
                <h6>freelancer01.devs@gmail.com</h6>
                <h6>zolbayar.in@gmail.com</h6>
              </div>
            </div>
            <div className="flex items-center justify-start bg-slate-100 gap-2   py-6 px-5 border border-[#dfe0e4] rounded-2xl max-lg:justify-start">
              <div className="">
                <CiLocationOn
                  color="#0d47a1"
                  className=" bg-white w-[80px] h-[80px] p-3 flex items-center justify-center border border-[#dfe0e4] rounded-full"
                />
              </div>
              <div className="flex flex-col justify-center border-solid  w-[119px] ">
                <h2 className="text-xl font-semibold mb-5">Location</h2>
                <h6>Ulaanbaatar Sukhbaatar District</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[856px] h-fit p-8 rounded-2xl bg-white shadow-xl max-lg:w-[696px] max-lg:items-center max-md:w-11/12 max-md:items-center">
          <div className="flex  pb-8 w-full max-lg:mb-0">
            <h3 className="text-2xl font-semibold ">Get in touch with us.</h3>
          </div>
          <form
            className="flex flex-col  justify-between items-center w-full h-fit"
            onSubmit={handleSubmit}
          >
            <div className="flex w-full h-[90px] max-lg:flex-col max-lg:mb-24">
              <div className="w-[396px] h-[90px] px-3 mt-6 max-lg:w-full">
                <label className="text-xl font-normal">Name</label>
                <input
                  required
                  name="Name"
                  className="bg-slate-100 w-full rounded-2xl p-4"
                  placeholder="Type your Name here"
                />
              </div>
              <div className="w-[396px] h-[90px] px-3 mt-6 max-lg:w-full">
                <label className="text-xl font-normal">Email</label>
                <input
                  required
                  name="Email"
                  className="bg-slate-100 w-full rounded-2xl p-4"
                  placeholder="Type your Email here (Make sure it's valid)"
                />
              </div>
            </div>
            <div className=" max-lg:w-full mt-10">
              <div className="w-[792px] h-[180px] px-3 max-lg:w-full">
                <label className="text-xl font-normal">Message</label>
                <textarea
                  required
                  name="Message"
                  className="bg-slate-100 mt-4 w-full rounded-2xl h-[150px] p-4"
                  placeholder="Type your text here"
                />
              </div>
            </div>
            <div className="flex w-full justify-start mt-10">
              <BlueButton
                buttonName="Send Message"
                type="submit"
                width={250}
                height={60}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
