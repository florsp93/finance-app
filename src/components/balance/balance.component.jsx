import { useEffect, useState, useContext } from "react";

import { ItemsContext } from "../../context/items.context";

const Balance = () => {
  const { items } = useContext(ItemsContext);
  const [itemsToShow, setItemsToShow] = useState({});

  useEffect(() => {
    console.log("balance useEffect");
    setItemsToShow(items);
  }, [items, itemsToShow]);

  return (
    <div className="balance-items-box">
      <div className="balance-head">
        <h2 className="">Balance</h2>
        <button type="submit" className="btn">
          Borrar Todo
        </button>
      </div>
      <div className="balance-body">
        {Object.keys(itemsToShow).map((key, i) => {
          //key => collection key
          //ItemsToShow[key] => object data
          const { motive, amount, type } = itemsToShow[key];
          return (
            <div
              key={i}
              className={`balance-item ${type === "earn" ? "earn" : "lost"}`}
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
