import React, { useState } from "react";

const Plate = () => {
  const [plate, setPlate] = useState([""]);
  const [plateCarbs, setPlateCarbs] = useState("0");
  const [plateProtein, setPlateProtein] = useState("0");
  const [plateFats, setPlateFats] = useState("0");
  const [plateCalories, setPlateCalories] = useState("0");
  return (
    <div id="plate-div">
      <div id="plate-main">
        <div id="plate-title">
          <h1>Current Plate</h1>
        </div>
      </div>
      <div id="plate-stats-main">
        <div id="plate-stats">
          <div id="plate-stats-title">
            <h1>Totals</h1>
          </div>
          <div id="stats-main">
            <div id="stats-main1" className="totals-div">
              <div>
                <h4>Protein</h4>
              </div>
              <div>{plateProtein}</div>
            </div>
            <div id="stats-main2" className="totals-div">
              <div>
                <h4>Carbohydrates</h4>
              </div>
              <div>{plateCarbs}</div>
            </div>
            <div id="stats-main3" className="totals-div">
              <div>
                <h4>Fats</h4>
              </div>
              <div>{plateFats}</div>
            </div>
            <div id="stats-main4" className="totals-div">
              <div>
                <h4>Calories</h4>
              </div>
              <div>{plateCalories}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plate;
