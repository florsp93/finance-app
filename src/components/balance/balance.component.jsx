import { useEffect, useState, useContext } from "react";

import { ValuesContext } from "../../context/values.context";

const Balance = () => {
  const values = useContext(ValuesContext);
  const [valuesToShow, setValuesToShow] = useState({});

  useEffect(() => {
    setValuesToShow(values);
  }, [values, valuesToShow]);

  return (
    <div className="balance-box">
      <div className="balance-head">
        <h2 className="">Balance</h2>
        <button type="submit" className="btn">
          Borrar Todo
        </button>
      </div>
      <div className="balance-body">
        {Object.keys(valuesToShow).map((key, i) => {
          //key => collection key
          //valuesToShow[key] => object data
          const { motive, amount, type } = valuesToShow[key];
          return (
            <div
              key={i}
              className={`balance-values ${type === "earn" ? "earn" : "lost"}`}
            >
              <h3>
                {motive} | {amount} | {type}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Balance;
