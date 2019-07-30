import React, { useState, useEffect } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

const getEntriesFromStorage = () =>
  JSON.parse(window.localStorage.getItem("journalEntries"));

const Totals = props => {
  const [saldoTotal, setSaldoTotal] = useState(0);

  useEffect(() => {
    let valores = getEntriesFromStorage();
    let sumaTotal = 0;
    valores && valores.length !== 0
      ? (sumaTotal = valores.reduce((a, b) => ({
          importe: a.importe + b.importe
        })))
      : console.log("no hay storage");
    setSaldoTotal(sumaTotal.importe || 0);
  }, [props.totalItems]);

  return (
    <div className="totals-div">
      <p className="h2 quicksand text-center">Saldo Total</p>
      <p className="h4 quicksand text-center">{formatter.format(saldoTotal)}</p>
    </div>
  );
};

export default Totals;
