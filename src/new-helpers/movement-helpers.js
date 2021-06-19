// export function randomMove(entity, grid, update) {
//     const possSquares = spreadSquareFromPoint(entity.currentSquare, grid, entity.movementRange, () => {});
//     const target = sample(possSquares);

//     moveToward(entity, target, grid, update);
// }

import {random, sample} from "lodash";
import {getDistance} from "./grid-helpers";

const facingDirs = ["n","s","e","w","ne","nw","se","sw"];

const dirFind = {
    "ne": ["n", "e"],
    "se": ["s", "e"],
    "nw": ["n", "w"],
    "sw": ["s", "w"],
}

const flightDirections = {
    "n": ["s","se","sw","e","w","ne","nw"],
    "ne": ["sw","s","se","e","w","nw","n"],
    "nw": ["se","s","sw","e","w","ne","n"],
    "sw": ["ne","n","nw","e","w","se","s"],
    "se": ["nw","n","ne","e","w","sw","s"],
    "s": ["n","ne","nw","e","w","se","sw"],
    "w": ["e","se","ne","s","n","sw","nw"],
    "e": ["w","sw","nw","s","n","se","ne"]
};

const awayQuadrant = {
    "n": ["s","se","sw"],
    "ne": ["sw","s","w"],
    "nw": ["se","s","w"],
    "sw": ["ne","n","e"],
    "se": ["nw","n","w"],
    "s": ["n","ne","nw"],
    "w": ["e","se","ne"],
    "e": ["w","sw","nw"]
}

const towardQuadrant = {
    "s": ["s","se","sw"],
    "sw": ["sw","s","w"],
    "se": ["se","s","w"],
    "ne": ["ne","n","e"],
    "nw": ["nw","n","w"],
    "n": ["n","ne","nw"],
    "e": ["e","se","ne"],
    "w": ["w","sw","nw"]
}

export function findEntityFaceForTarget(entity, target) {
    const targetDir = getDirectionToTarget(entity.currentSquare, target);

    if(targetDir.length === 2) {
        return targetDir[0];
    }

    return targetDir;
}

export function turnEntityToSquare(entity, target) {
    const targetDir = findEntityFaceForTarget(entity, target);
    turnEntity(entity, targetDir);
}

function turnEntity(entity, facing) {
    if(facing) {
        entity.facing = facing
    } else {
        entity.facing = sample(facingDirs);
    }
    
    entity.dir = getDirFromFacing(entity.facing);
}

export function getDirFromFacing(facing) {
    if(facing.length === 1) {
        return facing;
    }

    return sample(dirFind[facing]);
}

export function idleMove(entity) {
    let motivationLevel;
    
    if(isOutsideTerritory(entity)) {
        motivationLevel = 100;
    } else if(entity.terrainPreference[entity.currentSquare] < 50) {
        motivationLevel = 100 - entity.terrainPreference[entity.currentSquare];
    }

    if(motivationLevel) {
        moveEntityTowardTarget(entity, entity.territoryCenter, motivationLevel)
    } 
    
    let rand = random(1,10);

    if(rand <= 2) {
        turnEntity(entity);
    } else if(rand <= 5){
        turnEntity(entity);
        moveEntity(entity);
    } else {
        moveEntity(entity);
    }
}

// Used if escaping threat - will ignore territory and perferred terrain
function canEntityEscapeToSquare(entity, target) {
    return !target.structure && !target.currentEntity && entity.possTerrain.indexOf(target.terrainType) !== -1;
}

function isOutsideTerritory(entity) {
    return getDistanceOutsideTerritory(entity) > 0;
}

function getDistanceOutsideTerritory(entity, targetSquare = null) {
    if(!entity.isTerritoryRestricted) {
        return 0;
    }

    let  square = targetSquare || entity.currentSquare;

    return getDistance(square, entity.territoryCenter) - entity.territorySize;
}

function getTerritoryInfluence(entity, square) {
    let distanceOutsideTerritory = getDistanceOutsideTerritory(entity, square);
    
    if(distanceOutsideTerritory <= 0) {
        return 0;
    }

    let territoryInfluence = distanceOutsideTerritory / entity.territorySize * 100;
    return territoryInfluence;
}

function willEntityMoveToSquare(entity, square, motivationLevel = 0) {

    if(!square) {
        console.log("Square is undefined - canEntityMoveToSquare");
        return false;
    }

    if(!canEntityMoveToSquare(entity, square)) {
        return false;
    }

    if(entity.terrainPreference[entity.currentSquare.terrainType] - entity.terrainPreference[square.terrainType] > motivationLevel) {
        return false;
    }

    if(entity.isTerritoryRestricted && getTerritoryInfluence(entity, square) > motivationLevel) {
        return false;
    }

    return true;
}

function canEntityMoveToSquare(entity, square) {
    const moveTerrain = square.terrainType;
    if(square.structure || square.currentEntity) {
        return false;
    }

    if(entity.coveredSquares && entity.coveredSquares.length && !canMegaMoveToSquare(entity)) {
        return false;
    }

    return true;
}

function canMegaMoveToSquare(entity) {
    for (let index = 0; index < entity.coveredSquares.length; index++) {
        if(!canEntityMoveToSquare(entity, entity.coveredSquares[index])) {
            return false;
        }
    }

    return true;
}

function moveEntity(entity) {
    const moveSquare = entity.currentSquare[entity.facing];
    const moveTerrain = moveSquare && moveSquare.terrainType;
    if(willEntityMoveToSquare(entity, moveSquare)) {
        moveEntityToSquare(entity, moveSquare);
    } else {
        turnEntity(entity);
    }
}

export function moveEntityToSquare(entity, moveSquare, speed) {
    turnEntityToSquare(entity, moveSquare);

    const moveTerrain = moveSquare && moveSquare.terrainType;

    entity.currentSquare.currentEntity = null;
    entity.currentSquare = moveSquare;
    moveSquare.currentEntity = entity;
    entity.heightIndex = moveSquare.heightIndex;
    entity.widthIndex = moveSquare.widthIndex;
    entity.isSwim = moveTerrain.isSwim;
    entity.isVisible = moveSquare.isVisible;
    if(speed) {
        entity.tempSpeed = speed;
    }
}


function findEntityDirection(entity, other) {
    for (let index = 0; index < facingDirs.length; index++) {
        const dir = facingDirs[index];
        if(entity.currentSquare[dir] && entity.currentSquare[dir].currentEntity === other) {
            return dir;
        }
    }
    console.log("ERROR Entity direction not found");
    
}

function getQuadrant(quadrant, isAway) {
    return isAway ? awayQuadrant[quadrant] : towardQuadrant[quadrant];
}

function getDirectionToTarget(square, target) {
    let heightDiff = square.heightIndex - target.heightIndex;
    let heightAbs = Math.abs(heightDiff) || .1;// 0 breaks division

    let widthDiff = square.widthIndex - target.widthIndex;
    let widthAbs = Math.abs(widthDiff) || .1;// 0 breaks division

    const heightToWidth = heightAbs/widthAbs;
    const isDiagonal = (heightToWidth >= .5 && heightToWidth <= 2);
    const isNorthern = heightDiff > 0;
    const isWestern = widthDiff > 0;

    if(isDiagonal) {
        if(isNorthern) {
            return isWestern ? "nw" : "ne";
        }

        return isWestern ? "sw" : "se";
    }

    if(heightToWidth > 2) {
        return isNorthern ? "n" : "s";
    }

    return isWestern ? "w" : "e";
}

// function getDirectionToTarget(square, target) {
//     let heightDiff = target.heightIndex - square.heightIndex;
//     let heightAbs = Math.abs(heightDiff);

//     let widthDiff = target.widthIndex - square.widthIndex;
//     let widthAbs = Math.abs(widthDiff);

//     if(heightDiff < 0) {
//         if(heightAbs > widthAbs) {
//             return "n";
//         }

//         if(widthDiff < 0) {
//             return "ne";
//         }

//         return "nw";
//     }

//     if(heightAbs > widthAbs) {
//         return "s";
//     }

//     if(widthDiff < 0) {
//         return "se";
//     }

//     return "sw";
// }

export function moveEntityTowardTarget(entity, target, motivationLevel) {
    let bestSquare = entity.currentSquare;
    let bestSquareDiff = getDistance(bestSquare, target);
    let sideQuadrant = getQuadrant(getDirectionToTarget(entity.currentSquare, target), false);

    for (let index = 0; index < entity.speed; index++) {
        for (let index = 0; index < sideQuadrant.length; index++) {
            const side = entity.currentSquare[sideQuadrant[index]];
            if(willEntityMoveToSquare(entity, side, motivationLevel)) {
                let diff = getDistance(side, target);
                if(diff < bestSquareDiff) {
                    bestSquareDiff = diff;
                    bestSquare = side;
                }
            } 
        }

        if(bestSquare !== entity.currentSquare) {
            moveEntityToSquare(entity, bestSquare);
        } else {
            console.log(entity.name, "NO BEST SQUARE FOUND");
            return false;
        } 
    }

    return true;
}

export function moveEntityAwayFromTarget(entity, target, motivationLevel) {
    let bestSquare = entity.currentSquare;
    let bestSquareDiff = getDistance(bestSquare, target);
    let sideQuadrant = getQuadrant(getDirectionToTarget(entity.currentSquare, target), true);

    for (let index = 0; index < entity.speed; index++) {
        for (let index = 0; index < sideQuadrant.length; index++) {
            const side = entity.currentSquare[sideQuadrant[index]];
            if(willEntityMoveToSquare(entity, side, motivationLevel)) {
                let diff = getDistance(side, target);
                if(diff > bestSquareDiff) {
                    bestSquareDiff = diff;
                    bestSquare = side;
                }
            } 
        }

        if(bestSquare !== entity.currentSquare) {
            moveEntityToSquare(entity, bestSquare);
        } else {
            console.log("NO BEST SQUARE FOUND");
            return false;
        }    
    }

    return true;
}

// function moveAwayFromEntity(entity, other) {
//     const attackerDirection = findEntityDirection(entity, other);
//     console.log("attackerDirection", attackerDirection);
    
//     const possFlightDirections = flightDirections[attackerDirection];
//     if(!possFlightDirections) {
//         attackEntity(entity, other);
//         return;
//     }
//     console.log("possFlightDirections", possFlightDirections);
    
//     for (let index = 0; index < possFlightDirections.length; index++) {
//         if(entity.currentSquare[possFlightDirections[index]]) {
//             moveEntityToSquare(entity, entity.currentSquare[possFlightDirections[index]]);
//             return;
//         }
//     }
//     console.log("cannot escape");
    
// }

// function persueEntity(entity, other) {
//     if(isInRange(entity, other)) {
//         attackEntity(entity, other);
//     } else {
//         moveEntityTowardTarget(entity, other.currentSquare)
//     };
// }

export function isInRange(entity, other, range) {    
    let yDist = Math.abs(entity.heightIndex - other.heightIndex);
    let xDist = Math.abs(entity.widthIndex - other.widthIndex);

    let targetRange = range ? range : entity.range;
    
    return yDist <= targetRange && xDist <= targetRange;
}