import {worldParams} from "../constants/world";

export function getPosition(heightIndex, widthIndex, height, widthToHeight) {
    
    const width = widthToHeight * height;

    let topAdjust = worldParams.squareHeight;
    let leftAdjust = worldParams.squareWidth;
    let top = 0;
    let left = 0;

    top += ((topAdjust / 2) * heightIndex);
    left += ((leftAdjust / 2) * heightIndex);
    
    top -= ((topAdjust / 2) * widthIndex);
    left += ((leftAdjust / 2) * widthIndex);

    left -= width / 3;
    top -= height / 3;

    return {top, left};
}

export function getPlantPosition(heightIndex, widthIndex, height, widthToHeight) {
    
    const width = widthToHeight * height;

    let topAdjust = worldParams.squareHeight;
    let leftAdjust = worldParams.squareWidth;
    let top = 0;
    let left = 0;

    top += ((topAdjust / 2) * heightIndex);
    left += ((leftAdjust / 2) * heightIndex);
    
    top -= ((topAdjust / 2) * widthIndex);
    left += ((leftAdjust / 2) * widthIndex);

    left -= width / 2;
    top -= height / 1.1;

    return {top, left};
}


/*
8000 72 x 152  .009 x .019
16000 141 x 312 .0088125 x .0195
32000 295 x 616 .00921875 x .01925




.009 x .01925


*/