import React, { useState, useContext } from "react";

//context
import { FoodQueryContext } from "../contexts/FoodQueryContext";

const FoodDetails = () => {
  const { tableCarbs } = useContext(FoodQueryContext); //contexts
  const { tableProtein } = useContext(FoodQueryContext); //contexts
  const { tableFats } = useContext(FoodQueryContext); //contexts
  return (
    <div id="food-details-div">
      <div id="nutritional-info">
        <div id="box-spacer">
          {" "}
          <div id="carbs" className="nutritional-div">
            <div>
              <h1>Carbs</h1>
            </div>
            <div id="state-nutrition">{tableCarbs}</div>
          </div>
        </div>
        <div id="box-spacer">
          {" "}
          <div id="protein" className="nutritional-div">
            <div>
              <h1>Protein</h1>
            </div>

            <div id="state-nutrition">{tableProtein}</div>
          </div>
        </div>
        <div id="box-spacer">
          {" "}
          <div id="fats" className="nutritional-div">
            <div>
              <h1>Fats</h1>
            </div>
            <div id="state-nutrition">{tableFats}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
