import React, { useState, createContext } from "react";

export const FoodQueryContext = createContext();

const FoodQueryContextProvider = props => {
  const [foodItem, setFoodItem] = useState([""]);
  const [tableCarbs, setTableCarbs] = useState("");
  const [tableProtein, setTableProtein] = useState("");
  const [tableFats, setTableFats] = useState("");
  const [totalCarbs, setTotalCarbs] = useState("0");
  const [totalProtein, setTotalProtein] = useState("0");
  const [totalFats, setTotalFats] = useState("0");
  const [totalCalories, setTotalCalories] = useState("0");

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
        handleFats,
        totalCarbs,
        setTotalCarbs,
        totalProtein,
        setTotalProtein,
        totalFats,
        setTotalFats,
        totalCalories,
        setTotalCalories
      }}
    >
      {props.children}
    </FoodQueryContext.Provider>
  );
};

export default FoodQueryContextProvider;
