import { useState, useEffect } from "react";

import Form from "./components/form/form.component";
import Total from "./components/total/total.component";
import Balance from "./components/balance/balance.component";

const getEntriesFromStorage = () =>
  JSON.parse(window.localStorage.getItem("journalEntries"));

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let valores = getEntriesFromStorage();
    setItems(valores);
  }, []);

  const handleNewItem = (e) => {
    const almacenado = getEntriesFromStorage();
    setItems(almacenado);
  };
  const seBorroItem = (e) => {
    setItems(e);
  };
  return (
    <div className="">
      <p className="lato300" style={{ letterSpacing: "1px" }}>
        con Financeapp podras llevar el control de tus ganancias y gastos de
        forma sencilla.
      </p>
      <Total totalItems={items} />
      <Form onNewItem={handleNewItem} />
      <Balance balance={items} itemBorrado={seBorroItem} />
    </div>
  );
};

export default App;
