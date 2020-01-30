import React from "react";
import FoodQuerySection from "./FoodQuerySection";

import "../sass/main.scss";

//contexts
import FoodQueryContextProvider from "../contexts/FoodQueryContext";

const App = () => {
  return (
    <div>
      <FoodQueryContextProvider>
        <FoodQuerySection />
      </FoodQueryContextProvider>
    </div>
  );
};

export default App;
