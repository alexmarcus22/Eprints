import React from 'react';
import { useField } from 'formik';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

const SelectComp = ({
  label,
  options,
  ...props
}) => {

  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;

  return (
    <FormControl>
      <Select
        defaultValue="article"
        name={field.name}
        onChange={(option) => setValue(option.value)}
      >
        {options && options.map((option, index) => (
          <Option value={option.value} key={index}>{option.label}</Option>
        ))}
      </Select>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </FormControl>
  )
}

export default SelectComp;