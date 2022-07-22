import { useState, useEffect } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

const Total = () => {
  const [saldoTotal, setSaldoTotal] = useState(0);

  return (
    <div className="">
      <p className="">Saldo Total</p>
      <p className="">{formatter.format(saldoTotal)}</p>
    </div>
  );
};

export default Total;
