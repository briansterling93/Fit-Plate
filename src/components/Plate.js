import React, { useContext } from "react";

//context
import { FoodQueryContext } from "../contexts/FoodQueryContext";

const Plate = () => {
  const { foodItem, setFoodItem } = useContext(FoodQueryContext); //contexts
  const { totalCarbs } = useContext(FoodQueryContext); //contexts
  const { totalProtein } = useContext(FoodQueryContext); //contexts
  const { totalFats } = useContext(FoodQueryContext); //contexts
  const { totalCalories } = useContext(FoodQueryContext); //contexts

  return (
    <div id="plate-div">
      <div id="plate-main">
        <div id="plate-title">
          <h1>Current Plate</h1>
        </div>
        <div id="plate-items">
          <ul>
            {foodItem.map(item => (
              <li key={item.id}>
                {item.value}

                <hr />
              </li>
            ))}
          </ul>
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
              <div>{totalProtein}</div>
            </div>
            <div id="stats-main2" className="totals-div">
              <div>
                <h4>Carbohydrates</h4>
              </div>
              <div>{totalCarbs}</div>
            </div>
            <div id="stats-main3" className="totals-div">
              <div>
                <h4>Fats</h4>
              </div>
              <div>{totalFats}</div>
            </div>
            <div id="stats-main4" className="totals-div">
              <div>
                <h4>Calories</h4>
              </div>
              <div>{totalCalories}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plate;
