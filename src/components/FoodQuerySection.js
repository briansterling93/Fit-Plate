import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodDetails from "./FoodDetails";
import Plate from "./Plate.js";

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
      const head = {
        headers: {
          "Content-Type": "application/json"
        }
      };

      const body = JSON.stringify(newSearch);

      //query UI input search
      const res = await axios.post(
        "https://api.nal.usda.gov/fdc/v1/search?api_key=Nqr7rveC0s3PtsDv3yNzxBa8v6TdKsifRah4by2v",
        body,
        head
      );

      const searchId = res.data.foods[0].fdcId;

      //query nutritional info of UI input search based off fdcId
      const res2 = await axios.get(
        "https://api.nal.usda.gov/fdc/v1/?api_key=Nqr7rveC0s3PtsDv3yNzxBa8v6TdKsifRah4by2v"
      );

      console.log(res2.data);
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
      {/* <input name="food-search" value={foodQuery} onChange={querySearch} />
      <button onClick={queryFood}>Search</button>
      <div>{foodItem}</div> */}
      <div id="header-input">
        <input placeholder="Enter an Item" />
        <div id="btns-div">
          <button id="search-button">Search</button>
        </div>
      </div>
      {/* <div id='header-button-add'>
        add 'add to plate?' button after item is searched
      </div> */}
      <div>
        <FoodDetails />
        <Plate />
      </div>
    </div>
  );
};

export default FoodQuerySection;
