import React, { useState, useEffect } from "react";
import axios from "axios";

const FoodQuerySection = () => {
  const [foodItem, setFoodItem] = useState([]);

  const queryFood = async e => {
    e.preventDefault();
    try {
      const headers = {
        "Content-Type": "application/json"
      };

      const res = await axios.get(
        "https://api.nal.usda.gov/fdc/v1/search?api_key=Nqr7rveC0s3PtsDv3yNzxBa8v6TdKsifRah4by2v"
      );

      const item = JSON.stringify(res.data.foods[1].description);

      await setFoodItem(item);

      //   setFoodItem(res.data.foods[1]);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <button onClick={queryFood}>Search</button>
      <div>{foodItem}</div>
    </div>
  );
};

export default FoodQuerySection;
