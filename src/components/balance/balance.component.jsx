import { useEffect, useState, useContext } from "react";

import { ValuesContext } from "../../context/values.context";

const Balance = () => {
  const values = useContext(ValuesContext);
  const [valuesToShow, setValuesToShow] = useState({});

  useEffect(() => {
    setValuesToShow(values);
  }, [values, valuesToShow]);

  return (
    <div className="mt-4">
      <div className="">
        <h2 className="">Balance</h2>
        <button type="submit" className="">
          Borrar Todo
        </button>
      </div>
      <div className="">
        {Object.keys(valuesToShow).map((key, i) => {
          //key => collection key
          //valuesToShow[key] => object data
          const { motive, amount } = valuesToShow[key];
          return (
            <div key={i}>
              <h1>
                {motive}
                {amount}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Balance;
