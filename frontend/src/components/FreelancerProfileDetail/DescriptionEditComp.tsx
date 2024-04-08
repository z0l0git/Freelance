import { Formik, Form, ErrorMessage } from "formik";
import { useFormik } from "formik";
import { BlueButton, ButtonWithBlueBorder, WhiteButton } from "../Button";
import { useState } from "react";
import { Input } from "../Sign/Input";
import * as Yup from "yup";
import axios from "axios";
type DescriptionType={discription: string}
export const DescriptionEditComp = () => {
  const [showdescriptionEdit, setShowDescriptionEdit] = useState(false);
  const clickButton = () => {
    setShowDescriptionEdit(!showdescriptionEdit);
  };
  const initialValues = {
    discription: "",
  };
  const validationSchema = Yup.object().shape({
    discription: Yup.string().required("Bio is required").min(10, "too short bio").max(50, "too long bio"),
  });
  const DiscriptionForm = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
      initialValues: {
        discription: '',
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });
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
      <div className="w-full rounded-xl p-5 overflow-hidden">
        {/* <Formik
          initialValues={initialValues}
          onSubmit={}
          validationSchema={validationSchema}
        >
          {({ setFieldValue }) =>(
            <Form> 
              <div className="">
                <Input /> </div>
            </Form>
        {showdescriptionEdit ? (
          <div className="flex justify-between gap-4">
            <ButtonWithBlueBorder
              buttonName="Cancel"
              buttonClass="w-3/12 text-sm"
            />
            <BlueButton
              buttonName="Update"
              type="submit"
              handleSubmit={clickButton}
            />
          </div>
        ) : (
          ""
        )}
          )}
        </Formik> */}
         <form onSubmit={formik.handleSubmit}>
       <label htmlFor="discription">Discription</label>
       <input
         id="discription"
         name="discription"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.discription}
       />
 
       <button type="submit">Submit</button>
     </form>
      </div>
    </div>
  );
};
