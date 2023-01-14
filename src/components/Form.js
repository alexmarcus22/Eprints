import { Button, Card, CardContent, Typography } from "@mui/material"
import { Formik, Form, Field, FieldArray } from 'formik';
import { object, mixed, string } from 'yup';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import TextField from '@mui/material/TextField';
import SelectComp from "./Select";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';

const validationSchema = object({
  select: string().ensure().required("Select is required!"),
  title: string().ensure().required("Title is required!")
});

const options = [
  { value: "article", label: "Article" },
  { value: "client", label: "Client" },
  { value: "monograf", label: "Monograf" },
];

const FormComponent = () => {
  return (
    <Card sx={{ minWidth: 500, minHeight: 500 }}>
      <CardContent>
        <Formik
          initialValues={{
            select: 'article'
          }}
          enableReinitialize={true}
          onSubmit={values => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));
            }, 100)
          }}
        >
          <Form style={{ 'display': 'flex', 'flexDirection': 'column', alignItems: 'start' }}>
            <SelectComp options={options} name="select" label="select" id="Type" />
            <Field name="title" label="title" id="title" component={TextField} />
            <Button type="submit" variant='secondary'>Submit</Button>
          </Form>
        </Formik>
      </CardContent>
    </Card >
  )
}

export default FormComponent;