import React, { useState, useEffect } from "react";
import axios from "axios";

const FoodQuerySection = () => {
  const [foodQuery, setFoodQuery] = useState("");
  const [foodItem, setFoodItem] = useState([]);

  //User input food query
  const querySearch = e => {
    setFoodQuery(e.target.value);
  };

  //Query UI Input
  const queryFood = async e => {
    e.preventDefault();

    const query = foodQuery;

    const newSearch = {
      generalSearchInput: query
    };

    try {
      const headers = {
        "Content-Type": "application/json"
      };

      const body = JSON.stringify(newSearch);

      const res = await axios.post(
        "https://api.nal.usda.gov/fdc/v1/search?api_key=Nqr7rveC0s3PtsDv3yNzxBa8v6TdKsifRah4by2v",
        body,
        headers
      );

      //   const res = await axios.get(
      //     "https://api.nal.usda.gov/fdc/v1/search?api_key=Nqr7rveC0s3PtsDv3yNzxBa8v6TdKsifRah4by2v",
      //     body,
      //     headers
      //   );

      console.log(res.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <input name="food-search" value={foodQuery} onChange={querySearch} />
      <button onClick={queryFood}>Search</button>
      <div>{foodItem}</div>
    </div>
  );
};

export default FoodQuerySection;
