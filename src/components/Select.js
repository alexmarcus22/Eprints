import Select from "react-select";
import React from 'react';
import { useField } from 'formik';

const SelectComp = ({
  label,
  options,
  ...props
}) => {

  const [field, meta, helpers] = useField(props);
  const { touched, error, value } = meta;
  const { setValue } = helpers;

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
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