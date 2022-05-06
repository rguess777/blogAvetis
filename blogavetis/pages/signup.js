import { Formik } from "formik"
import { useCallback, useContext, useState } from "react"

const initialValues = {
  email: "",
  password: "",
}
const Signup = () => {
  const [error, setError] = useState([])
  const { saveJWT } = useContext(AppContext)
  const handleFormSubmit = useCallback(async ({ email, password }) => {
    setError(null)

    try {
      const { data } = await makeClient().post("/sign-up", { email, password })
      console.log(data)

      if (!data) {
        throw new Error("Missing JWT.")
      }
    } catch (err) {
      const { response: { data, status } = {} } = err

      if (!status) {
        console.log("error js")

        return
      }

      if (data.error) {
        setError(data.error)

        return
      }

      setError("Oops, something went wrong.")
    }
  }, [])

  return (
    <>
      <NavBar />
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit, isSubmitting, isValid }) => (
          <form onSubmit={handleSubmit}>
            <FormField name="email" type="email" label="E-mail" />
            <FormField name="password" type="password" label="Password" />
            <Button type="submit" disabled={isSubmitting || !isValid}>
              Sign in
            </Button>
          </form>
        )}
      </Formik>
    </>
  )
}
export default Signup
