import { Card, CardContent, Typography } from "@mui/material"
import { Formik, Form, Field } from 'formik'


const FormComponent = () => {
  return (
    <Card>
      <CardContent>
        <Formik>
          <Form>
            <Field as="select" name="type">
            </Field>
          </Form>
        </Formik>
      </CardContent>
    </Card>
  )
}

export default FormComponent;