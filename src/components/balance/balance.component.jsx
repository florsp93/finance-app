import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

const Balance = () => {
  const [balance, setBalance] = useState([]);

  return (
    <div className="mt-4">
      <div className="">
        <h2 className="">Balance</h2>
        <button type="submit" className="">
          Borrar Todo
        </button>
      </div>

      <div className="">
        {balance.map((item, i) => {
          if (item.tipo === "earn") {
            return (
              <li key={i + 1} className="">
                <p className="">{item.motivo}</p>
                <p className="">{formatter.format(item.importe)}</p>
                <button
                  type="submit"
                  className="btn btn-light btn-sm"
                  value={i}
                >
                  X
                </button>
              </li>
            );
          }
          return (
            <li key={i + 1} className="">
              <p className="">{item.motivo}</p>
              <p className="">{formatter.format(item.importe)}</p>
              <button type="submit" className="" value={i}>
                X
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Balance;
