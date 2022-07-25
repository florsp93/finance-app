import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import { createOrUpdateValues } from "../../utils/firebase.utils";

const defaultValues = {
  motive: "",
  type: "",
  amount: "",
};

const Form = () => {
  const [values, setValues] = useState(defaultValues);
  const { motive, amount } = values;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    createOrUpdateValues(values);
    setValues(defaultValues);
    e.target.reset();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Motivo"}
          onChange={handleChange}
          value={motive}
          className=""
          type="text"
          name="motive"
          required
        />
        <FormInput
          label={"Importe"}
          onChange={handleChange}
          value={amount}
          className=""
          type="number"
          name="amount"
          required
        />
        <div>
          <input
            onChange={handleChange}
            type="radio"
            id="earn"
            name="type"
            value="earn"
          />
          <label htmlFor="earn">Ganancia</label>
          <input
            onChange={handleChange}
            type="radio"
            id="lost"
            name="type"
            value="lost"
          />
          <label htmlFor="lost">Perdida</label>
        </div>
        <br />
        <button type="submit" className="btn">
          Agregar
        </button>
      </form>
    </div>
  );
};
export default Form;
