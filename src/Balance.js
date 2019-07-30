import React, { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

const getEntriesFromStorage = () =>
  JSON.parse(window.localStorage.getItem("journalEntries"));

const setEntriesToStorage = items =>
  window.localStorage.setItem("journalEntries", JSON.stringify(items));

function Balance(props) {
  const [balance, setBalance] = useState([]);

  useEffect(() => {
    let valores = getEntriesFromStorage();
    setBalance(valores);
  }, [props]);

  const borrarItem = i => {
    const valores = getEntriesFromStorage();
    const ind = i.target.value;
    // el metodo splice se posiciona en el indice del array que le indicamos en el
    // primer parametro (ind), y elimina tantos items de ahi en adelante como le indiquemos en el segundo parametro (en este caso 1)
    valores.splice(ind, 1);
    console.log(valores);
    setEntriesToStorage(valores);
    setBalance(getEntriesFromStorage());
    props.itemBorrado(valores);
  };
  const borrarTodo = () => {
    window.localStorage.removeItem("journalEntries");
    setBalance([]);
    props.itemBorrado([]);
  };

  return (
    <div className="mt-4">
      <div className="row justify-content-around">
        <h2 className="h2 text-center quicksand">Balance</h2>
        <button
          type="submit"
          className="btn btn-secondary"
          onClick={borrarTodo}
        >
          Borrar Todo
        </button>
      </div>

      <div className="transparent m-2 rounded">
        {balance.map((item, i) => {
          if (item.tipo === "earn") {
            return (
              <li
                key={i + 1}
                className="earn col-9 float-left bg-info text-white rounded-sm m-1 text-capitalize p-2 d-flex justify-content-between"
              >
                <p className="mb-0">{item.motivo}</p>
                <p className="mb-0">{formatter.format(item.importe)}</p>
                <button
                  type="submit"
                  className="btn btn-light btn-sm"
                  value={i}
                  onClick={e => borrarItem(e)}
                >
                  X
                </button>
              </li>
            );
          }
          return (
            <li
              key={i + 1}
              className="loss col-9 float-right bg-danger text-white rounded-sm m-1 text-capitalize p-2 d-flex justify-content-between"
            >
              <p className="mb-0">{item.motivo}</p>
              <p className="mb-0">{formatter.format(item.importe)}</p>
              <button
                type="submit"
                className="btn btn-light btn-sm"
                value={i}
                onClick={e => borrarItem(e)}
              >
                X
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default Balance;
