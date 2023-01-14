import { Card, CardContent, Typography, } from "@mui/material"
import { Formik, Form, Field, useFormik } from 'formik';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { object, mixed, string } from 'yup';


const validationSchema = object({
  select: string().ensure().required("Select is required!")
})

const FormComponent = () => {
  const formik = useFormik({
    initialValues: {
      select: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    }
  });

  return (
    <Card>
      <CardContent>
        <form onSubmit={formik.handleSubmit}>
          <FormControl fullWidth>
            <InputLabel id="select-label" name="select">Select</InputLabel>
            <Select
              labelId="select-label"
              id="select"
              value={formik.values.select}
              label="Type"
              onChange={formik.handleChange}
              name="select"
              error={Boolean(formik.errors.select)}
              helpertext={formik.errors.select}
            >
              <MenuItem value={'article'}>Article</MenuItem>
              <MenuItem value={'client'}>Client</MenuItem>
              <MenuItem value={'monograf'}>Monograf</MenuItem>
            </Select>
          </FormControl>
          <button
            type="submit"
            className="btn btn-primary btn-block"
          >
            Submit
          </button>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormComponent;