import {worldParams} from "../constants/world";

export function getPosition(heightIndex, widthIndex, height, widthToHeight, topOffset=0, leftOffset=0) {
    
    const width = widthToHeight * height;

    let topAdjust = worldParams.squareHeight;
    let leftAdjust = worldParams.squareWidth;
    // let top = topOffset;
    // let left = leftOffset;
    let top = 0;
    let left = 0;

    top += ((topAdjust / 2) * heightIndex);
    left += ((leftAdjust / 2) * heightIndex);
    
    top -= ((topAdjust / 2) * widthIndex);
    left += ((leftAdjust / 2) * widthIndex);

    left -= width / 3;
    top -= height / 3;

    // top = top * 400 / w

    return {top, left};
}

export function getPlantPosition(heightIndex, widthIndex, height, widthToHeight, type) {
    
    const width = widthToHeight * height;

    let topAdjust = worldParams.squareHeight;
    let leftAdjust = worldParams.squareWidth;
    let top = type === "plant" || type === "structure" ? -20 : 0;
    let left = type === "plant" || type === "structure" ? -20 : 0;

    top += ((topAdjust / 2) * heightIndex);
    left += ((leftAdjust / 2) * heightIndex);
    
    top -= ((topAdjust / 2) * widthIndex);
    left += ((leftAdjust / 2) * widthIndex);

    left -= width / 2;
    top -= height / 1.1;

    return {top, left};
}


export function getZIndex(heightIndex, widthIndex, type="plant") {
    
    let zIndex = heightIndex * 1000 - widthIndex;
    if(type === "creature" || type === "unit") {
        zIndex += 2;
    }

    return zIndex;
}


export function loopGrid(grid, params) {
    const {innerCallback, outerCallback, innerParams, outerParams} = params;
    for (let heightIndex = 0; heightIndex < grid.length; heightIndex++) {
        typeof outerCallback === "function" && outerCallback(grid[heightIndex], outerParams);

        for (let widthIndex = 0; widthIndex < grid[heightIndex].length; widthIndex++) {
            const square = grid[heightIndex][widthIndex];
            innerCallback(square, innerParams);
        }
    }
}

const possDirs = ["n","s","e","w","ne","nw","se","sw"];

const dirMap = {
    "n" : ["n"],
    "s" : ["s"],
    "e" : ["e"],
    "w" : ["w"],
    "ne" : ["n", "ne", "e"],
    "nw" : ["n", "nw", "w"],
    "se" : ["s", "se", "e"],
    "sw" : ["s", "sw", "w"]
}

export function spreadFromPoint(start, depth, params, dirs) {
    depth --;
    const {callback, innerParams} = params;

    typeof callback === "function" && callback(start, innerParams);

    if(depth > 0) {
        if(!dirs) {
            dirs = possDirs;
        }
    
        for (let index = 0; index < dirs.length; index++) {
            if(start[dirs[index]]) {
                spreadFromPoint(start[dirs[index]], depth, params, dirMap[dirs[index]]);
            }
        }
    }
}

/*
8000 72 x 152  .009 x .019
16000 141 x 312 .0088125 x .0195
32000 295 x 616 .00921875 x .01925




.009 x .01925


*/