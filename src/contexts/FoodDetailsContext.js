import React, { useState, createContext } from "react";

export const FoodDetailsContext = createContext();

const FoodDetailsContextProvider = props => {
  const [carbs, setCarbs] = useState("");
  const [protein, setProtein] = useState("");
  const [fats, setFats] = useState("");
  const [calories, setCalories] = useState("");

  return (
    <FoodDetailsContext.Provider
      value={{
        carbs,
        setCarbs,
        protein,
        setProtein,
        fats,
        setFats,
        calories,
        setCalories
      }}
    >
      {props.children}
    </FoodDetailsContext.Provider>
  );
};

export default FoodDetailsContextProvider;
