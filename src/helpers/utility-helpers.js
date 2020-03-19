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