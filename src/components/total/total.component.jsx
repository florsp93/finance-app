import { useState, useEffect, useContext } from "react";

import { ItemsContext } from "../../context/items.context";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

const Total = () => {
  const [saldoTotal, setSaldoTotal] = useState(0);
  const { items } = useContext(ItemsContext);
  const [totalItems, setTotalItems] = useState({});

  //key => collection key
  //ItemsToShow[key] => object data
  //  const { motive, amount, type } = itemsToShow[key];

  useEffect(() => {
    setTotalItems(items);
    const totalSum = Object.keys(items).reduce((accumulator, key) => {
      const valueNumber = Number(items[key].amount);
      console.log(valueNumber);
      return accumulator + valueNumber;
    }, 0);
    console.log(totalSum);
    setSaldoTotal(totalSum);
  }, [items, totalItems]);

  return (
    <div className="">
      <p className="">Saldo Total</p>
      <p className="">{formatter.format(saldoTotal)}</p>
    </div>
  );
};

export default Total;
