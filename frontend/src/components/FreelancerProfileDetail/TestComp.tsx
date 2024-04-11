// import * as React from "react";
// import {
//   Formik,
//   FormikHelpers,
//   FormikProps,
//   Form,
//   Field,
//   FieldProps,
// } from "formik";

// interface MyFormValues {
//   discription: string;
// }

// export const MyApp: React.FC<{}> = () => {
//   const initialValues: MyFormValues = { discription: "" };
//   return (
//     <div>
//       <h1>My Example</h1>
//       <Formik
//         initialValues={initialValues}
//         onSubmit={(values, actions) => {
//           console.log({ values, actions });
//           alert(JSON.stringify(values, null, 2));
//           actions.setSubmitting(false);
//         }}
//       >
//         <Form>
//           <label htmlFor="discription">discription</label>
//           <Field
//             id="discription"
//             name="discription"
//             placeholder="Tell me about yourself"
//           />
//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// import * as Yup from "yup";
// import { withFormik, FormikErrors } from "formik";

// // Shape of form values
// interface FormValues {
//   email: string;
//   password: string;
// }

// interface OtherProps {
//   message: string;
// }

// // Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
// const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
//   const { touched, errors, isSubmitting, message } = props;
//   return (
//     <Form>
//       <h1>{message}</h1>
//       <Field type="email" name="email" />
//       {touched.email && errors.email && <div>{errors.email}</div>}

//       <Field type="password" name="password" />
//       {touched.password && errors.password && <div>{errors.password}</div>}

//       <button type="submit" disabled={isSubmitting}>
//         Submit
//       </button>
//     </Form>
//   );
// };

// // The type of props MyForm receives
// interface MyFormProps {
//   initialEmail?: string;
//   message: string; // if this passed all the way through you might do this or make a union type
// }

// // Wrap our form with the withFormik HoC
// const MyForm = withFormik<MyFormProps, FormValues>({
//   // Transform outer props into form values
//   mapPropsToValues: (props) => {
//     return {
//       email: props.initialEmail || "",
//       password: "",
//     };
//   },

//   // Add a custom validation function (this can be async too!)
//   validate: (values: FormValues) => {
//     let errors: FormikErrors<FormValues> = {};
//     if (!values.email) {
//       errors.email = "Required";
//     } else if (!isValidEmail(values.email)) {
//       errors.email = "Invalid email address";
//     }
//     return errors;
//   },

//   handleSubmit: (values) => {
//     // do submitting things
//   },
// })(InnerForm);

// // Use <MyForm /> wherevs
// export const Basic = () => (
//   <div>
//     <h1>My App</h1>
//     <p>This can be anywhere in your application</p>
//     <MyForm message="Sign up" />
//   </div>
// );
