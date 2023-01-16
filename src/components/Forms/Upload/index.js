import React, { useState, useEffect } from "react";
import { Field, useField } from "formik";
import FileUpload from "../../File";
import Grid from '@mui/material/Grid';


const UploadForm = (props) => {
  const {
    formField: { uploadFile }
  } = props;

  const [field, meta, helper] = useField(uploadFile.name);
  const { touched, error } = meta;
  const { setValue } = helper;
  const isError = touched && error && true;
  const { value } = field;
  const [filename, setFilename] = useState(value.name);
  const [file, setFile] = useState(value.file);
  const [src, setSrc] = useState(value.src);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <label >
          {uploadFile.label}
        </label>
        <Field
          variant="contained"
          field={field}
          component={FileUpload}
        />
      </Grid>
    </Grid>
  )
}

export default UploadForm;