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
        <button>test</button>
        {Object.keys(valuesToShow).map((motive) => console.log(motive))}
      </div>
    </div>
  );
};

export default Balance;
