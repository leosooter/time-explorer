import React, {useState} from "react";
import Plant from "./plant";
import {clone, sample, random} from "lodash";
import {worldParams} from "../../constants/world";
import plantDirectory from "./plant-directory";

let plantId = 1;
export default function Plants(props) {
  const {plants, handlePlayerHarvestResource} = props;
  const plantsWrapper = {
    // position: "absolute",
    // transform: `translate(${(worldParams.size / 40) - 13}px, ${(worldParams.size / 2) - 60}px)`
  }

  // const plantType = clone(plantDirectory["horsetail"]);

//   function newPlant(plantType, square) {
//     const plusMinus = random(1,2) === 2 ? 1 : -1;
//     const plant = clone(plantType);
//     const height = plant.heightToSquare * worldParams.squareSize;

//     plant.image = sample(plant.imageArray);
//     plant.id = `plant-${plantId}`;
//     plant.currentSquare = square;
//     plant.heightIndex = square.heightIndex;
//     plant.widthIndex = square.widthIndex;
//     plant.height = height + (random(0, plant.sizeRange) * plusMinus);
//     plant.id = plantId;

//     plantId ++;

//     return plant;
// }

  // const  testPlant = newPlant(plantType, {heightIndex: 0, widthIndex: 0})

  return (
    <div style={plantsWrapper}>
      {/* <Plant {...testPlant} /> */}
      {plants.map((plant) => {
        return (<Plant key={`plant:${plant.heightIndex}-${plant.widthIndex}`} {...plant} handlePlayerHarvestResource={handlePlayerHarvestResource}/>);
      })}
    </div>
  );
}