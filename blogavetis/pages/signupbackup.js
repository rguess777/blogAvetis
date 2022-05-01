// import { Input } from "postcss";
// import FormField from "../components/FormField";
// import { Formik } from "formik";



// const Signup = () => {
//     return (
//         <div className=" w-full h-12 ">
//             <h3>Signup</h3>
//             <Formik
//           onSubmit={handleFormSubmit}
//           initialValues={entries}
//           validationSchema={validationSchema}
//         >
//           {({ handleSubmit, isValid, isSubmitting }) => (
//             <form
//               onSubmit={handleSubmit}
//               noValidate
//               className="flex flex-col gap-4 p-4"
//             >
//               <FormField name="e-mail" type="text" placeholder="Email">
//                 E-mail
//               </FormField>
//               <FormField name="password" type="password" placeholder="Password">
//                 Password
//               </FormField>
//               <FormField name="confirmpassword" type="password" placeholder="Confirm Password">
//                 Confirm Password
//               </FormField>
              
//               <Button type="submit" disabled={!isValid || isSubmitting}>
//                 Sign Up
//               </Button>
//             </form>
//           )}
//         </Formik>
//         </div> 
    
//     )};
// export default Signup;