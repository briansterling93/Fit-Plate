import React from "react";
import FoodQuerySection from "./FoodQuerySection";

import "../sass/main.scss";

//contexts
import FoodQueryContextProvider from "../contexts/FoodQueryContext";
import FoodDetailsContextProvider from "../contexts/FoodDetailsContext";

const App = () => {
  return (
    <div>
      <FoodQueryContextProvider>
        <FoodDetailsContextProvider>
          <FoodQuerySection />
        </FoodDetailsContextProvider>
      </FoodQueryContextProvider>
    </div>
  );
};

export default App;
