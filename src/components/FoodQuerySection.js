import React, { useState, useContext } from "react";
import axios from "axios";
import FoodDetails from "./FoodDetails";
import Plate from "./Plate.js";

//context
import { FoodQueryContext } from "../contexts/FoodQueryContext";

const FoodQuerySection = () => {
  const [foodQuery, setFoodQuery] = useState("");

  const { foodItem, setFoodItem } = useContext(FoodQueryContext); //contexts

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
      const head = {
        headers: {
          "Content-Type": "application/json"
        }
      };

      const body = JSON.stringify(newSearch);

      //query user inputted food details
      const res = await axios.post(
        "https://api.nal.usda.gov/fdc/v1/search?api_key=Nqr7rveC0s3PtsDv3yNzxBa8v6TdKsifRah4by2v",
        body,
        head
      );

      const searchId = res.data.foods[0].fdcId;

      //query nutritional details for food inputed by the user after obtaining the FDCID
      const res2 = await axios.get(
        "https://api.nal.usda.gov/fdc/v1/" +
          searchId +
          "?api_key=Nqr7rveC0s3PtsDv3yNzxBa8v6TdKsifRah4by2v"
      );

      //set user inputted food name to state
      setFoodItem(res.data.foods[0].description);

      //console.log(res.data.foods[0].description);
      console.log({ carbs: res2.data.labelNutrients.carbohydrates.value });
      console.log({ protein: res2.data.labelNutrients.protein.value });
      console.log({ fats: res2.data.labelNutrients.fat.value });
      console.log({ calories: res2.data.labelNutrients.calories.value });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div id="food-query-section">
      {" "}
      <div id="header-titles">
        <h1>
          <span id="main-title">Fit Plate</span>
          <span id="secondary-title">Better eating, longer living</span>
        </h1>
      </div>
      <div id="header-input">
        <input
          name="food-search"
          value={foodQuery}
          onChange={querySearch}
          placeholder="Enter an Item"
        />
        <div id="btns-div">
          <button id="search-button" onClick={queryFood}>
            Search
          </button>
          {foodItem}
        </div>
      </div>
      <div>
        <FoodDetails />
        <Plate />
      </div>
    </div>
  );
};

export default FoodQuerySection;
