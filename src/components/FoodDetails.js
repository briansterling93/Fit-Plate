import React, { useState, useContext } from "react";

//context

const FoodDetails = () => {
  return (
    <div id="food-details-div">
      <div id="nutritional-info">
        <div id="box-spacer">
          {" "}
          <div id="carbs" className="nutritional-div">
            <div>
              <h1>Carbs</h1>
            </div>
            <div id="state-nutrition"></div>
          </div>
        </div>
        <div id="box-spacer">
          {" "}
          <div id="protein" className="nutritional-div">
            <div>
              <h1>Protein</h1>
            </div>
            <div id="state-nutrition"></div>
          </div>
        </div>
        <div id="box-spacer">
          {" "}
          <div id="fats" className="nutritional-div">
            <div>
              <h1>Fats</h1>
            </div>
            <div id="state-nutrition"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
