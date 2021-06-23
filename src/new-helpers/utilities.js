import {random as lodashRandom, clamp, round, remove, orderBy, forEach} from "lodash";
import {getDistance} from "./grid-helpers";

export function generateWeightedArray(baseArray, nullSize = 20) {
    const weightedArray = new Array(nullSize).fill(null);

    for (let index = 0; index < baseArray.length; index++) {
        const {type, occurance} = baseArray[index];
        for (let index = 0; index < occurance; index++) {
            weightedArray.push(type);
        }
    }

    return weightedArray;
}

export function addToObject(object, key, value, modifier= 1) {
    console.log("object, key, value", object, key, value);
    
    const modifiedValue = value * modifier;
    console.log("object[key]", object[key], modifiedValue);

    if(object[key]) {
        object[key] += modifiedValue;
    } else {
        object[key] = modifiedValue;
    }
}

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

export function random(min, max) {
    if (min >= 0) {
        return lodashRandom(min, max);
    }

    let maxRand = lodashRandom(0, max);
    let minRand = lodashRandom(0, Math.abs(min)) * -1;
    if (minRand === -0) {
        minRand = 0;
    }

    return lodashRandom(1,2) === 2 ? minRand : maxRand;
}

//Returns a value - 0 - 100, how close the value is to the ideal given the range
export function getDiffFromIdeal(value, ideal, passedRange) {
  const range = passedRange || ideal;

  let diffFromIdeal = Math.abs(ideal - value) / range;
  if(diffFromIdeal === 0) {
    return 100;
  }

  if(diffFromIdeal >= 1) {
    return 0;
  }

  return round(1 - diffFromIdeal, 2) * 100;
}


export function matchRangeToRange(targetRange, valueRange, value, roundTo = 0) {
    if (value === 0) {
        return 0
    }

    const targetDiff = targetRange[1] - targetRange[0];
    const valueDiff = valueRange[1] - valueRange[0];
    const adjust = valueDiff / targetDiff;

    return clamp(round((value / adjust), roundTo), targetRange[0], targetRange[1]);
}

export function matchInverseRangeToRange(targetRange, valueRange, value, roundTo = 0) {
    if (value === 0) {
        return 0
    }

    const targetDiff = targetRange[1] - targetRange[0];
    const valueDiff = valueRange[1] - valueRange[0];
    const adjust = valueDiff / targetDiff;

    return clamp(round(targetRange[1] - (value / adjust), roundTo), targetRange[0], targetRange[1]);
}

export function fractionArray(array, fraction) {
    if(fraction > array.length) {
        console.warn("*** Array fraction must be smaller than array length (at fractionArray)")
        return array;
    }
    const returnArray = [];
    const fractionLength = Math.floor(array.length / fraction);
    let index = 0;

    for (let i = 0; i < fraction; i++) {
        const section = []
        for (let j = 0; j < fractionLength; j++) {
            if(array[index]) {
                section.push(array[index])
            }
            index ++;
        }

        if(i === fraction - 1 && array[index]) {
            section.push(array[index])
        }
        if(section[0]) {
            returnArray.push(section);
        }
    }

    return returnArray;
}

/*

25
30

10 - 15-35

abs(25 - 14) = 11/10 = 1
1 - .9 = .1

0
45



if(0) return 0

return 1/25

15 = 0
35 = 0
16 = .04
25 = 1
30 = .4
45 = .2



*/

// const getDiffFromIdeal = (value, ideal, range) => {
//     // returns a value from 1 to 0. 1 for ideal, 0 for outside range.

//     if(value < ideal - range || value > ideal + range) {
//         return 0;
//     }

//     const diffFromIdeal = ideal - Math.abs(value - ideal);
//     const percentValue = round(diffFromIdeal / ideal, 2);

//     return round(percentValue, 2);
// }

export function weightedChance(valueArray, defaultValue) {
    const rand = random(1, 100);

    let current = 0;

    for (let index = 0; index < valueArray.length; index++) {
        const max = current + (100 * valueArray[index].chance);
        if(rand > current && rand <= max) {
            return valueArray[index].value;
        }

        current = max;
    }

    return defaultValue;

}