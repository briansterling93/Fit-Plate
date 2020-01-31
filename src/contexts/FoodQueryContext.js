import React, { useState, createContext } from "react";

export const FoodQueryContext = createContext();

const FoodQueryContextProvider = props => {
  const [foodItem, setFoodItem] = useState([""]);
  const [tableCarbs, setTableCarbs] = useState("");
  const [tableProtein, setTableProtein] = useState("");
  const [tableFats, setTableFats] = useState("");

  const updateFoodItem = i => {
    setFoodItem(i);
  };

  const handleCarbs = i => {
    setTableCarbs(i);
  };

  const handleProtein = i => {
    setTableProtein(i);
  };

  const handleFats = i => {
    setTableFats(i);
  };

  return (
    <FoodQueryContext.Provider
      value={{
        foodItem,
        setFoodItem,
        updateFoodItem,
        tableCarbs,
        setTableCarbs,
        handleCarbs,
        tableProtein,
        setTableProtein,
        handleProtein,
        tableFats,
        setTableFats,
        handleFats
      }}
    >
      {props.children}
    </FoodQueryContext.Provider>
  );
};

export default FoodQueryContextProvider;
