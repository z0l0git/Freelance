import { Formik } from "formik";
import { BlueButton, ButtonWithBlueBorder, WhiteButton } from "../Button";
import { ReactEventHandler } from "react";
type Props = { clickButton: () => void };
export const FormComp: React.FC<Props> = (props) => {
  const { clickButton } = props;
  return (
    <div className="flex rounded-3xl bg-gray-100 w-full h-fit">
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <form
            onSubmit={props.handleSubmit}
            className="w-full h-fit flex flex-col p-5"
          >
            <input
              type="text"
              className="bg-white border rounded-2xl p-3"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
              name="name"
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
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
