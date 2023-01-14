import Select from "react-select";
import React from 'react';
import { useField } from 'formik';
import FormControl from '@mui/material/FormControl';

const SelectComp = ({
  label,
  options,
  ...props
}) => {

  const [field, meta, helpers] = useField(props);
  const { touched, error, value } = meta;
  const { setValue } = helpers;

  console.log(field.name);

  return (
    <div>
      <Select
        options={options}
        name={field.name}
        onChange={(option) => setValue(option.value)}
        instanceId={props.id}
        menuPosition="fixed"
      />
    </div>
  )
}

export default SelectComp;