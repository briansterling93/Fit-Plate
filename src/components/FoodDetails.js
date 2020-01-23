import React, { useState } from "react";

const FoodDetails = () => {
  const [carbs, setCarbs] = useState("");
  const [protein, setProtein] = useState("");
  const [fats, setFats] = useState("");
  return (
    <div id="food-details-div">
      <div id="nutritional-info">
        <div id="box-spacer">
          {" "}
          <div id="carbs" className="nutritional-div">
            <div>
              <h1>Carbs</h1>
            </div>
            <div>{carbs}</div>
          </div>
        </div>
        <div id="box-spacer">
          {" "}
          <div id="protein" className="nutritional-div">
            <div>
              <h1>Protein</h1>
            </div>
            <div>{protein}</div>
          </div>
        </div>
        <div id="box-spacer">
          {" "}
          <div id="fats" className="nutritional-div">
            <div>
              <h1>Fats</h1>
            </div>
            <div>{fats}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
