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