import React, { useState, createContext } from "react";

export const FoodQueryContext = createContext();

const FoodQueryContextProvider = props => {
  const [foodItem, setFoodItem] = useState([]);

  const updateFoodItem = i => {
    setFoodItem(i);
  };

  return (
    <FoodQueryContext.Provider
      value={{ foodItem, setFoodItem, updateFoodItem }}
    >
      {props.children}
    </FoodQueryContext.Provider>
  );
};

export default FoodQueryContextProvider;
