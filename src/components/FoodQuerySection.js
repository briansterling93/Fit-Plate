import React, { useState, useContext } from "react";
import axios from "axios";
import FoodDetails from "./FoodDetails";
import Plate from "./Plate.js";

//context
import { FoodQueryContext } from "../contexts/FoodQueryContext";

const FoodQuerySection = () => {
  const [foodQuery, setFoodQuery] = useState("");
  const [error, setError] = useState("");
  const [addToPlate, setPlate] = useState("");

  const { foodItem, setFoodItem } = useContext(FoodQueryContext); //contexts
  const { tableCarbs, setTableCarbs } = useContext(FoodQueryContext); //contexts
  const { tableProtein, setTableProtein } = useContext(FoodQueryContext); //contexts
  const { tableFats, setTableFats } = useContext(FoodQueryContext); //contexts

  //User input food query
  const querySearch = e => {
    setFoodQuery(e.target.value);
  };

  //Query UI Input
  const queryFood = async e => {
    e.preventDefault();

    setPlate("");

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

      //error handling if item nutritional info not found
      if (!res2.data.labelNutrients || !res.data.foods[0].fdcId) {
        setError("Item not found, please try again");
      }

      // //set user inputted food name to state (below)
      // if (res2.data.labelNutrients)
      //   setFoodItem([
      //     ...foodItem,
      //     {
      //       id: foodItem.length,
      //       value: res.data.foods[0].description
      //     }
      //   ]);

      if (res2.data.labelNutrients) {
        setError("");
      }

      if (res2.data.labelNutrients) {
        setPlate(
          <div
            onClick={() =>
              setFoodItem([
                ...foodItem,
                {
                  id: foodItem.length,
                  value: res.data.foods[0].description
                }
              ])
            }
          >
            <button id="add-btn" onClick={() => setPlate("")}>
              Add Item To Plate?
            </button>
          </div>
        );
      }

      if (res2.data.labelNutrients) {
        setTableCarbs(
          `${Math.floor(res2.data.labelNutrients.carbohydrates.value)}g`
        );
        setTableFats(`${Math.floor(res2.data.labelNutrients.fat.value)}g`);
        setTableProtein(
          `${Math.floor(res2.data.labelNutrients.protein.value)}g`
        );
      }

      //console.log(res.data.foods[0].description);
      console.log({ carbs: res2.data.labelNutrients.carbohydrates.value });
      console.log({ protein: res2.data.labelNutrients.protein.value });
      console.log({ fats: res2.data.labelNutrients.fat.value });
      console.log({ calories: res2.data.labelNutrients.calories.value });
      console.log(foodItem);
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
        {addToPlate}
        <div id="error-div">{error}</div>
        <div id="btns-div">
          <button id="search-button" onClick={queryFood}>
            Search
          </button>
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
