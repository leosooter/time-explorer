import {remove, orderBy, forEach} from "lodash";
import {getDistance} from "./grid-helpers";

export function pullFromArray(array, test, passedParams) { // Uses the test function to evaluate all elements in the array and returns the element with the highest score
  let best = 0;
  let returnValue = null;

  array.map((element) => {
    let possBest = test(element, passedParams);

    if(possBest > best) {
      returnValue = element;
      best = possBest;
    }
  });

  return returnValue;
}

export function removeFromArray(array, value) {
  let removeIndex = -1;

  if(typeof value === "function") {
    array.map((element, index) => {
      if(value(element)) {
        removeIndex = index;
        //break;
      }
    })
  } else {
    removeIndex = array.indexOf(value);
  }

  if(removeIndex !== -1) {
    array.splice(removeIndex, 1);
  } else {
    console.log("No value found to remove", array, value);
  }
}

export function removeFromArrayById(array, targetId) {
  let removeIndex = -1;

  return remove(array, (element) => element.id === targetId);
}

export function findClosest(entity, collection) {
    let closestMatch = null;
    let closestDistance = 10000000;

    forEach(collection, (tribeObj) => {
        let dist = getDistance(entity.currentSquare, tribeObj.currentSquare);
        if(dist < closestDistance) {
            closestDistance = dist;
            closestMatch = tribeObj;
        }
    })

    return closestMatch;
}