import React from "react";

import validator from "./validator";

function FormValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues ({...values, [name]: value});
    setErrors ({...errors, [name]: validator(name, value)});
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = React.useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { 
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
  };
}

export default FormValidation;