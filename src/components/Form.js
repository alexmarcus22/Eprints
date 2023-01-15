import { Button, Card, CardContent, Typography } from "@mui/material"
import { Formik, Form, Field, FieldArray } from 'formik';
import { object, mixed, string } from 'yup';
import Textarea from "./Textarea";
import SelectComp from './Select';
import Input from './Input';
import FileUpload from "./File";
import { FormStepper } from "./FormStepper";
import Grid from '@mui/material/Grid';

const options = [
  { value: "article", label: "Article" },
  { value: "client", label: "Client" },
  { value: "monograf", label: "Monograf" },
];

const FormComponent = () => {
  return (
    <Card sx={{ minWidth: 700, minHeight: 700 }}>
      <CardContent sx={{ paddingY: 4, paddingX: 5 }}>
        <Typography variant="h3" align="center" component="h2">
          Formik Form
        </Typography>
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
              <FormStepper>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <SelectComp options={options} name="select" label="Select type" id="Type" />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <Input
                      name="title"
                      label="title"
                      id="title"
                    />
                  </Grid>
                  <Grid item md={6}>
                    <Textarea
                      label="Abstract"
                      name="abstract"
                      rows="6"
                      placeholder=""
                    />
                  </Grid>
                  <Grid item md={6}>
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
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <FileUpload type='file' name='file' label="File Upload" />
                  </Grid>
                  <Grid item md={6}>
                    <Button type="submit" variant='secondary'>Submit</Button>
                  </Grid>
                </Grid>
              </FormStepper>
            )
          }}
        </Formik>
      </CardContent>
    </Card >
  )
}

export default FormComponent;