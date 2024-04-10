import { Formik, FormikProps, ErrorMessageProps } from "formik";
import { BlueButton, ButtonWithBlueBorder, WhiteButton } from "../Button";
import { ReactEventHandler } from "react";
import { string } from "yup";
type Props = {
  clickButton: () => void;
};
export const WorkExperienceComp = (props: Props) => {
  const { clickButton } = props;
  return (
    <div className="flex rounded-3xl bg-gray-100 w-full h-fit">
      <Formik
        initialValues={{
          year: Date,
          occupation: "",
          companyName: "",
          about: "",
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props: FormikProps<any>) => (
          <form
            onSubmit={props.handleSubmit}
            className="w-full h-fit flex flex-col p-5 gap-4"
          >
            <input
              type="date"
              className="bg-white border rounded-2xl p-3"
              placeholder="date of start"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.year}
              name="year"
            />
            {/* {props.errors.year && <div id="feedback">{props.errors.year}</div>} */}
            <input
              type="text"
              className="bg-white border rounded-2xl p-3"
              placeholder="Enter your occupation"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.occupation}
              name="occupation"
            />
            {/* {props.errors.degree && (
              <div id="feedback">{props.errors.degree}</div>
            )} */}
            <input
              type="text"
              className="bg-white border rounded-2xl p-3"
              placeholder="Enter your company name"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.companyName}
              name="companyName"
            />
            {/* {props.errors.schoolName && (
              <div id="feedback">{props.errors.schoolName}</div>
            )} */}
            <input
              type="text"
              className="bg-white border rounded-2xl p-3"
              placeholder="Tell me about your company"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.about}
              name="about"
            />
            {/* {props.errors.about && (
              <div id="feedback">{props.errors.about}</div>
            )} */}
            <div className="w-full flex justify-around p-4">
              <WhiteButton
                buttonName="Update"
                buttonClass="blueButton"
                type="submit"
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
