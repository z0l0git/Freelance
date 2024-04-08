"use client";
import { Formik, Form, ErrorMessage, Field, useFormik } from "formik";
import { BlueButton, ButtonWithBlueBorder, WhiteButton } from "../Button";
import React, { useState } from "react";
import { Basic, MyApp } from "./TestComp";
interface MyBioValues {
  discription: string;
}
export const DescriptionEditComp: React.FC<{}> = () => {
  const [showdescriptionEdit, setShowDescriptionEdit] = useState(false);
  const clickButton = () => {
    setShowDescriptionEdit(!showdescriptionEdit);
  };
  const initialValues: MyBioValues = { discription: "" };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold">Description</h3>
        {!showdescriptionEdit ? (
          <WhiteButton
            buttonClass="font-bold text-[#0d47a1] cursor-pointer"
            onClick={clickButton}
            buttonName="Edit"
          />
        ) : (
          ""
        )}
      </div>
      <div
        className={
          !showdescriptionEdit
            ? "w-full rounded-xl p-5 overflow-hidden"
            : "bg-gray-100 rounded-xl p-4 "
        }
      >
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
        >
          <Form>
            <Field
              id="discription"
              name="discription"
              placeholder="Tell me about yourself"
              disabled={!showdescriptionEdit ? true : false}
              className={
                !showdescriptionEdit
                  ? "w-full h-fit p-1 bg-transparent text-justify text-gray-700 "
                  : "w-full bg-transparent text-black mb-8 pb-8 border-b-2  "
              }
            />
            {showdescriptionEdit ? (
              <div className="flex justify-between gap-4">
                <ButtonWithBlueBorder
                  buttonName="Cancel"
                  type="cancel"
                  buttonClass="w-6/12 text-sm px-[31px] py-[15px] border rounded-[100px]"
                  onClick={!showdescriptionEdit}
                />
                <BlueButton
                  buttonName="Update"
                  type="submit"
                  buttonClass="w-6/12 text-white bg-[#0d47a1] rounded-[100px]"
                  onclick={clickButton}
                />
              </div>
            ) : (
              ""
            )}
          </Form>
        </Formik>
      </div>
      {/* <Basic /> */}
    </div>
  );
};
