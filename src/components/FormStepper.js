import { Children, cloneElement, useState } from "react";
import { Form } from "formik";
import { Button, Stack, Step, StepLabel, Stepper } from "@mui/material";

export const FormStepper = ({ children }) => {
  const stepsArray = Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentStep = stepsArray[step];

  return (
    <Form style={{ 'display': 'flex', 'flexDirection': 'column' }}>
      <Stepper alternativeLabel activeStep={step} sx={{ marginBottom: 5 }}>
        {children.map((child, index) => (
          <Step key={index} completed={step > index}>
            <StepLabel>{child.props.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {currentStep}
      <Stack direction="row" spacing={2} sx={{ marginTop: 5 }}>
        {step > 0 ? (<Button variant="contained" onClick={() => {
          setStep(step - 1);
        }}>
          Back
        </Button>
        ) : null}
        {step < stepsArray.length - 1 ? (<Button variant="contained" onClick={() => {
          setStep(step + 1);
        }}>
          Next
        </Button>) : (
          <Button variant="contained" type="submit">
            Submit
          </Button>
        )}
      </Stack>
    </Form >
  );
};