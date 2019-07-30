import React, { useState, useEffect } from "react";
import Form from "./Form";
import Totals from "./Totals";
import Balance from "./Balance";

const getEntriesFromStorage = () =>
  JSON.parse(window.localStorage.getItem("journalEntries"));

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let valores = getEntriesFromStorage();
    setItems(valores);
  }, []);

  function handleNewItem(e) {
    const almacenado = getEntriesFromStorage();
    setItems(almacenado);
  }
  const seBorroItem = e => {
    setItems(e);
  };
  return (
    <div className="app-div">
      <p className="text-center lato300" style={{ letterSpacing: "1px" }}>
        con Financeapp podras llevar el control de tus ganancias y gastos de
        forma sencilla.
      </p>
      <Totals totalItems={items} />
      <Form onNewItem={handleNewItem} />
      <Balance balance={items} itemBorrado={seBorroItem} />
    </div>
  );
}

export default App;
