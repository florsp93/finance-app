import { createContext, useState, useEffect } from "react";

import { getValuesFromDatabase } from "../utils/firebase.utils";

export const ValuesContext = createContext({
  values: {},
});

export const ValuesProvider = ({ children }) => {
  const [values, setValues] = useState({});

  useEffect(() => {
    const getValues = async () => {
      const fetchedValues = await getValuesFromDatabase();
      setValues(fetchedValues);
    };
    getValues();
  }, []);

  return (
    <ValuesContext.Provider value={values}>{children}</ValuesContext.Provider>
  );
};

// const getValues = async () => {
//     const values = await getValuesFromDatabase();
//     console.log(values);
//     setValues(values);
//   };
//   getValues();
//   console.log(values);
