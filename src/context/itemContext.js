import React, { createContext, useState } from "react";

// Create Context
const ItemContext = createContext();

// Create Provider Component
const ItemProvider = ({ children }) => {
  const [itemList, setItemList] = useState([]);
  //   const [itemCount, setItemCount] = useState(0);
  //   const [itemName, setItemName] = useState("");

  return (
    <ItemContext.Provider
      value={{
        itemList,
        setItemList,
        // itemCount,
        // setItemCount,
        // itemName,
        // setItemName,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export { ItemContext, ItemProvider };
