import {random} from "lodash";
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

export function traverseDir(options) {
    const {grid, start, dir, depth, callBack, params} = options;

    // for (let index = 0; index < grid.length; index++) {
    //     const element = array[index];
        
    // }
}


// Search outward from point - fast break when callback returns true;
// Returns square from true callback
export function searchSquareFromPoint(start, grid, dist, callBack, passedParams) {
    const {heightIndex, widthIndex} = start;
    callBack(start, 0, passedParams);
    
    for (let level = 1; level < dist + 1; level++) {
        let height = heightIndex - level;
        let width = widthIndex - level;
        let edgeLength = level * 8;

        for (let index = 0; index < edgeLength; index++) {
            if(grid[height] && grid[height][width]) {
                if(callBack(grid[height][width], level, passedParams)) {
                    return grid[height][width];
                }
            }

            if(index < edgeLength * .25) {
                width ++;
            } else if (index < edgeLength * .5) {
                height ++;
            } else if(index < edgeLength * .75) {
                width --;
            } else {
                height --;
            }
        }
    }

    return null;
}

// Search outward from point - runs callback on every square and adds to array;
// Returns array of squares
export function spreadSquareFromPoint(start, grid, dist, callBack, passedParams) {
    let squares = [];
    const {heightIndex, widthIndex} = start;
    callBack(start, 0, passedParams);
    
    for (let level = 1; level < dist + 1; level++) {
        let height = heightIndex - level;
        let width = widthIndex - level;
        let edgeLength = level * 8;

        for (let index = 0; index < edgeLength; index++) {
            if(grid[height] && grid[height][width]) {
                callBack(grid[height][width], level, passedParams);
                squares.push(grid[height][width]);
            }

            if(index < edgeLength * .25) {
                width ++;
            } else if (index < edgeLength * .5) {
                height ++;
            } else if(index < edgeLength * .75) {
                width --;
            } else {
                height --;
            }
        }
    }

    return squares;
}

export function getDistance(square, target) {
    const heightDiff = Math.abs(square.heightIndex - target.heightIndex);
    const widthDiff = Math.abs(square.widthIndex - target.widthIndex);
    let primaryDist = heightDiff > widthDiff ? heightDiff : widthDiff;
    let secondaryDist = heightDiff < widthDiff ? heightDiff * .1 : widthDiff * .1;

    return primaryDist + secondaryDist;
}

export function isInRange(square, target, range) {
    // console.log("square", square);
    const heightDiff = Math.abs(square.heightIndex - target.heightIndex);
    const widthDiff = Math.abs(square.widthIndex - target.widthIndex);
    // console.log("heightDiff", heightDiff, "widthDiff", widthDiff, "range", range);
    return heightDiff <= range && widthDiff <= range;
}