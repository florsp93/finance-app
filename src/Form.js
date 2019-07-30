import React, { useEffect } from "react";
import useForm from "./useForm";

const Form = props => {
  const { values, handleChange, handleSubmit } = useForm(addNewItem);

  const setEntriesToStorage = items =>
    window.localStorage.setItem("journalEntries", JSON.stringify(items));

  const getEntriesFromStorage = () =>
    JSON.parse(window.localStorage.getItem("journalEntries"));

  useEffect(() => {
    getEntriesFromStorage() == null
      ? setEntriesToStorage([])
      : console.log("no localstorage");
  });

  function addNewItem() {
    const almacenado = getEntriesFromStorage();
    almacenado.push(values);
    setEntriesToStorage(almacenado);
    props.onNewItem(values);
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mt-3">
          <label htmlFor="motivo">Motivo</label>
          <div>
            <input
              onChange={handleChange}
              value={values.motivo || ""}
              className="custom-input rounded"
              type="text"
              name="motivo"
              required
            />
          </div>
        </div>
        <div className="mt-3">
          <label htmlFor="importe">Importe</label>
          <div className="control">
            <input
              onChange={handleChange}
              value={values.importe || ""}
              className="custom-input rounded"
              type="number"
              name="importe"
              required
            />
          </div>
        </div>
        <div>
          <select
            className="mt-2 rounded"
            required
            name="tipo"
            onChange={handleChange}
            value={values.tipo}
            id="cambiar"
          >
            <option value="earn">+</option>
            <option value="loss">-</option>
          </select>
        </div>
        <button type="submit" className="btn btn-outline-dark mt-3 mb-3">
          Agregar
        </button>
      </form>
    </div>
  );
};
export default Form;
