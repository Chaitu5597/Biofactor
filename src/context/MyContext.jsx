import { createContext, useState } from "react";

// Create context
const MyContext = createContext();

// Provider component
export const MyProvider = ({ children }) => {
  const [value, setValue] = useState("default value");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
