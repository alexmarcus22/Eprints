import { Button, Card, CardContent, Typography } from "@mui/material"
import { Formik, Form, Field, FieldArray } from 'formik';
import { object, mixed, string } from 'yup';
import Textarea from "./Textarea";
import SelectComp from './Select';
import Input from './Input';
import FileUpload from "./File";

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
            select: 'article',
            title: '',
            abstract: '',
            authors: ['Alex', 'Cristi']
          }}
          enableReinitialize={true}
          onSubmit={values => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));
            }, 100)
          }}
        >
          {(formikProps) => {
            const { values } = formikProps;
            return (
              <Form style={{ 'display': 'flex', 'flexDirection': 'column', alignItems: 'start' }}>
                <SelectComp options={options} name="select" label="Select type" id="Type" />
                <Input
                  name="title"
                  label="title"
                  id="title"
                />
                <Textarea
                  label="Abstract"
                  name="abstract"
                  rows="6"
                  placeholder=""
                />
                <FieldArray
                  name="authors"
                  render={helper => (
                    <div>
                      {values.authors && values.authors.length > 0 ? (
                        values.authors.map((author, i) => (
                          <div key={i}>
                            <Field name={`authors.${i}`} />
                            <button type="button"
                              onClick={() => helper.remove(i)}>
                              Remove
                            </button>
                            <button type="button"
                              onClick={() => helper.push('alex')}>
                              Add
                            </button>
                          </div>
                        ))
                      ) : null}
                    </div>
                  )}
                />
                <FileUpload type='file' name='file' label="File Upload" />
                <Button type="submit" variant='secondary'>Submit</Button>
              </Form>
            )
          }}
        </Formik>
      </CardContent>
    </Card >
  )
}

export default FormComponent;