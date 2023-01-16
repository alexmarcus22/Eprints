import { Button, Card, CardContent, Typography, Stack, Step, StepLabel, Stepper } from "@mui/material"
import { Field, FieldArray, Formik, Form } from 'formik';
import Textarea from "./Textarea";
import { FormStepper } from "./FormStepper";
import Grid from '@mui/material/Grid';
import { array, object, string, mixed } from "yup";
import Upload from "./Forms/Upload";
import { useState } from "react"

const options = [
  { value: "article", label: "Article" },
  { value: "client", label: "Client" },
  { value: "monograf", label: "Monograf" },
];

const steps = ["Type", "Details", "Upload"]

const FILE_SUPPORTED_FORMATS = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

const renderStep = (step) => {
  switch (step) {
    case 0:
      return
    default:
      return null;
  }
}


const FILE_SIZE = 160 * 102400000;

const validationSchema = object({
  select: string().ensure().required("Select is required"),
  title: string().required("Title is required").max(255, "Maxim"),
  abstract: string().required("Area is required"),
  authors: array().required("This field is required"),
  file: mixed().test(
    "fileSize",
    "File is too large",
    value => !value || (value && value.size <= FILE_SIZE)
  )
    .test(
      "fileFormat",
      "Unsupported Format",
      value => !value || (value => value && FILE_SUPPORTED_FORMATS.includes(value.type))
    )
});


const FormComponent = () => {
  const [activeStep, setActiveStep] = useState(0);

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
            authors: ['Alex', 'Cristi'],
            file: ''
          }}
          validationSchema={validationSchema}
          enableReinitialize={true}
          onSubmit={
            values => {
              alert(JSON.stringify(values, null, 2));
            }}
        >
          {({ values }) => (
            <Stepper activeStep={activeStep}>
              {steps.map(label => {
                <Step key={label}>
                  <StepLabel>
                    {label}
                  </StepLabel>
                </Step>
              })}
            </Stepper>
          )}
        </Formik>
      </CardContent>
    </Card >
  )
}

export default FormComponent;