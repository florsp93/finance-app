import { useContext, useState } from "react";

import FormInput from "../form-input/form-input.component";

import { ItemsContext } from "../../context/items.context";

const defaulNewtItemValues = {
  motive: "",
  type: "",
  amount: "",
};

const Form = () => {
  const [newItemValues, setNewItemValues] = useState(defaulNewtItemValues);
  const { motive, amount } = newItemValues;
  const { addItemToBalance } = useContext(ItemsContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewItemValues({ ...newItemValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newItemValues);
    addItemToBalance(newItemValues);
    setNewItemValues(defaulNewtItemValues);
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
