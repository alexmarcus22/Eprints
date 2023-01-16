import React from 'react';
import { useField, Field } from 'formik';

const FileUpload = ({
  field,
  form: { touched, errors },
  name,
  label,
  isError,
  ...props
}) => {
  return (
    <>
      <Field
        variant="outlined"
        name="file"
        title={label}
        type={"file"}
        {...props}
      />
    </>
  )
}

export default FileUpload;