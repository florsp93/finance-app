import { createContext, useState, useEffect } from "react";

import {
  getItemsFromDatabase,
  createOrUpdateItems,
} from "../utils/firebase.utils";

const addNewItem = (newItemValues) => {
  createOrUpdateItems(newItemValues);
};

export const ItemsContext = createContext({
  items: {},
  addItemToBalance: () => {},
});

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState({});

  useEffect(() => {
    const getStoredItems = async () => {
      const fetchedItems = await getItemsFromDatabase();
      setItems(fetchedItems);
    };
    getStoredItems();
  }, []);

  const addItemToBalance = (newItemValues) => {
    addNewItem(newItemValues);
    const getStoredItems = async () => {
      const fetchedItems = await getItemsFromDatabase();
      setItems(fetchedItems);
    };
    getStoredItems();
  };

  const valuesToPass = {
    items,
    addItemToBalance,
  };

  return (
    <ItemsContext.Provider value={valuesToPass}>
      {children}
    </ItemsContext.Provider>
  );
};
