import { useState, useEffect, useContext } from "react";

import { ItemsContext } from "../../context/items.context";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

const Total = () => {
  const { items } = useContext(ItemsContext);
  const [saldoTotal, setSaldoTotal] = useState(0);
  const [totalItems, setTotalItems] = useState({});

  useEffect(() => {
    setTotalItems(items);
    const totalSum = Object.keys(items).reduce((accumulator, key) => {
      const valueNumber = Number(items[key].amount);
      return items[key].type === "earn"
        ? accumulator + valueNumber
        : accumulator - valueNumber;
    }, 0);
    setSaldoTotal(totalSum);
  }, [items, totalItems]);

  return (
    <div className="total-div">
      <p className="total-title">Saldo Total</p>
      <p className="total-amount">{formatter.format(saldoTotal)}</p>
    </div>
  );
};

export default Total;
