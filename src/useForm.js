import { useState } from "react";

const useForm = callback => {
  const [values, setValues] = useState({});

  const handleSubmit = event => {
    if (event) event.preventDefault();
    if (!values.tipo || values.tipo === "earn") {
      values.tipo = "earn";
      values.importe = Number(values.importe);
    }
    if (values.tipo === "loss") values.importe = -Math.abs(values.importe);
    callback();
    setValues([]);
    document.getElementById("cambiar").value = "earn";
  };

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values
  };
};
export default useForm;
