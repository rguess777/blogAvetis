import Button from "../components/Button"
import FormField from "../components/FormField"
import { makeClient } from "../services/api"
import { Formik } from "formik"
import { useCallback, useContext, useState } from "react"
import * as yup from "yup"

const initialValues = {
  email: "",
  password: "",
}

const Signin = () => {

  
const [error, setError] = useState([])


  const handleFormSubmit = useCallback(async ({ email, password }) => {
    console.log(email);
    console.log(password);
    try{
      const {
        data: { jwt },
      } = await makeClient().post("/signIn", { email, password })
    
    }
      catch(
        error 
      )
      {
        const { response: { data, status } = {} } = err
        if (data.error) {
          setError(data.error)
    
          return
        }  
      }
 
  
},

 [])
  return (
    <Formik
    initialValues={initialValues}
    onSubmit={handleFormSubmit}
  >
    {({ handleSubmit, isSubmitting, isValid }) => (
      <form onSubmit={handleSubmit}>
        {error ? (
          <p className="bg-red-600 text-white front-bold px-4 py-2">
            {error}
          </p>
        ) : null}
        <FormField name="email" type="email" label="E-mail" />
        <FormField name="password" type="password" label="Password" />
        <Button type="submit" disabled={isSubmitting || !isValid}>
          Sign in
        </Button>
      </form>
    )}
  </Formik>
    
  )
  
};
export default Signin;

