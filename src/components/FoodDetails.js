import React, { useState } from "react";

const FoodDetails = () => {
  const [carbs, setCarbs] = useState("50");
  const [protein, setProtein] = useState("44");
  const [fats, setFats] = useState("55");
  return (
    <div id="food-details-div">
      <div id="nutritional-info">
        <div id="box-spacer">
          {" "}
          <div id="carbs" className="nutritional-div">
            <div>
              <h1>Carbs</h1>
            </div>
            <div id="state-nutrition">{carbs}</div>
          </div>
        </div>
        <div id="box-spacer">
          {" "}
          <div id="protein" className="nutritional-div">
            <div>
              <h1>Protein</h1>
            </div>
            <div id="state-nutrition">{protein}</div>
          </div>
        </div>
        <div id="box-spacer">
          {" "}
          <div id="fats" className="nutritional-div">
            <div>
              <h1>Fats</h1>
            </div>
            <div id="state-nutrition">{fats}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
